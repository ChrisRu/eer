import * as React from 'react';
import WindowSubComponent from '../util/sub/WindowSubComponent';
import Pos from '../util/Pos';
import CreateItem from './util/CreateItem';

const calculateZoom = (currentZoom: number, deltaY: number) => {
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

interface IInnerContainerProps {
  children?: React.ReactNode;
}

interface IInnerContainerState {
  mouseDown: boolean;
  mouseMove: boolean;
  movingPos: Pos;
  pos: Pos;
  zoom: number;
  createItem: Pos | null;
}

let startMovingPos: Pos | null = null;

class InnerContainer extends WindowSubComponent<
  IInnerContainerProps,
  IInnerContainerState
> {
  state = {
    mouseDown: false,
    mouseMove: false,
    movingPos: new Pos(),
    pos: new Pos(),
    zoom: 1,
    createItem: null
  };

  zoom = (event: MouseWheelEvent) => {
    this.setState(({ zoom, pos }) => {
      const newZoom = calculateZoom(zoom, event.deltaY);
      const zoomDiff = zoom - newZoom;

      const newPos = new Pos(
        pos.x + event.pageX - (event.pageX - event.pageX * zoomDiff),
        pos.y + event.pageY - (event.pageX - event.pageY * zoomDiff)
      );

      return { zoom: newZoom, pos: newPos };
    });
  };

  mouseMove = ({ pageX, pageY }: MouseEvent) => {
    if (this.state.mouseDown) {
      const xDiff = startMovingPos ? pageX - startMovingPos.x : 0;
      const yDiff = startMovingPos ? pageY - startMovingPos.y : 0;

      this.setState(prevState => ({
        mouseMove: true,
        movingPos: new Pos(xDiff, yDiff)
      }));
    }
  };

  mouseDown = (event: React.MouseEvent<SVGRectElement>) => {
    if (event.button === 1) {
      event.preventDefault();
      this.setState({
        mouseDown: true
      });

      startMovingPos = new Pos(event.pageX, event.pageY);
    }
  };

  mouseUp = (event: MouseEvent) => {
    if (event.button === 1) {
      event.preventDefault();

      this.setState(({ movingPos, pos }) => ({
        mouseDown: false,
        movingPos: new Pos(),
        pos: pos.add(movingPos)
      }));

      startMovingPos = null;
    }
  };

  createItem = ({ pageX, pageY }: React.MouseEvent<any>) => {
    const pos = new Pos(pageX, pageY);

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

  get transform(): string {
    const { zoom, pos, movingPos } = this.state;

    const { x, y } = pos.add(movingPos);

    return `translate(${x} ${y}) scale(${zoom})`;
  }

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
