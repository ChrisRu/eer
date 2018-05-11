import * as React from 'react';
import WindowSubComponent from '../util/sub/WindowSubComponent';
import Pos from '../util/Pos';
import CreateItem from './util/CreateItem';

interface IInnerContainerProps {
  children?: React.ReactNode;
}

interface IInnerContainerState {
  mouseDown: boolean;
  mouseMove: boolean;
  pos: Pos;
  zoom: number;
  createItem: Pos | null;
}

const newZoom = (currentZoom: number, deltaY: number) => {
  const zoomScale = 0.05;
  const minZoom = 0.3;
  const maxZoom = 2;

  const goingUp = deltaY < 0;

  // Ignore event if going past zoom limits
  if (
    (!goingUp && currentZoom < minZoom) ||
    (goingUp && currentZoom > maxZoom)
  ) {
    return currentZoom;
  }

  return currentZoom + (goingUp ? zoomScale : -zoomScale);
};

class InnerContainer extends WindowSubComponent<
  IInnerContainerProps,
  IInnerContainerState
> {
  state = {
    mouseDown: false,
    mouseMove: false,
    pos: new Pos(),
    zoom: 1,
    createItem: null
  };

  get transform(): string {
    const {
      zoom,
      pos: { x, y }
    } = this.state;

    return `translate(${x} ${y}) scale(${zoom})`;
  }

  zoom = (event: MouseWheelEvent) => {
    this.setState(({ zoom }) => ({
      zoom: newZoom(zoom, event.deltaY)
    }));
  };

  mouseMove = (event: MouseEvent) => {
    if (this.state.mouseDown) {
      const { movementX, movementY } = event;

      this.setState(prevState => ({
        mouseMove: true,
        pos: new Pos(prevState.pos.x + movementX, prevState.pos.y + movementY)
      }));
    }
  };

  mouseDown = (event: React.MouseEvent<SVGRectElement>) => {
    if (event.button === 1) {
      event.preventDefault();
      this.setState({
        mouseDown: true
      });
    }
  };

  mouseUp = (event: MouseEvent) => {
    if (event.button === 1) {
      event.preventDefault();
      this.setState({
        mouseDown: false
      });
    }
  };

  createItem = (event: React.MouseEvent<any>) => {
    const pos = new Pos(event.pageX, event.pageY);

    this.setState(({ createItem }) => ({
      createItem: createItem ? null : pos
    }));
  };

  exitItem = () => {
    this.setState({ createItem: null });
  };

  onClick = (event: React.MouseEvent<any>) => {
    if (!this.state.mouseMove) {
      this.createItem(event);
    }

    this.setState({
      mouseMove: false
    });
  };

  keydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.setState({
        createItem: null,
        mouseMove: false,
        mouseDown: false
      });
    }
  };

  componentDidMount() {
    this.on('mousemove', this.mouseMove);
    this.on('mouseup', this.mouseUp);
    this.on('wheel', this.zoom);
    this.on('keydown', this.keydown);
  }

  render() {
    const { createItem } = this.state;

    return (
      <React.Fragment>
        <rect
          x={0}
          y={0}
          width="100%"
          height="100%"
          onMouseDown={this.mouseDown}
          onClick={this.onClick}
          fill="transparent"
          className="diagram__rect"
        />
        <g transform={this.transform}>{this.props.children}</g>
        <CreateItem pos={createItem} onExit={this.exitItem} />
      </React.Fragment>
    );
  }
}

export default InnerContainer;
