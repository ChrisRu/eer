import * as React from 'react';
import WindowSubComponent from '../util/WindowSubComponent';
import Pos from '../util/Pos';
import CreateItem from './util/CreateItem';

interface IInnerContainerProps {
  children?: React.ReactChild[] | React.ReactChild;
}

interface IInnerContainerState {
  mouseDown: boolean;
  mouseMove: boolean;
  pos: Pos;
  zoom: number;
  createItem: Pos | null;
}

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

  mouseMove = (event: MouseEvent) => {
    if (this.state.mouseDown) {
      const { movementX, movementY } = event;

      this.setState(prevState => ({
        mouseMove: true,
        pos: new Pos(prevState.pos.x + movementX, prevState.pos.y + movementY)
      }));
    }
  };

  mouseDown = () => {
    this.setState({
      mouseDown: true
    });
  };

  mouseUp = () => {
    this.setState({
      mouseDown: false
    });
  };

  createItem = (event: React.MouseEvent<any>) => {
    this.setState({ createItem: new Pos(event.pageX, event.pageY) });
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

  componentDidMount() {
    this.on('mousemove', this.mouseMove);
    this.on('mouseup', this.mouseUp);
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
