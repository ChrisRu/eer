import * as React from 'react';
import WindowSub from '../util/windowSub';
import Pos from '../util/Pos';

interface IInnerContainerProps {
  children?: React.ReactChild[] | React.ReactChild;
}

interface IInnerContainerState {
  mouseDown: boolean;
  pos: Pos;
  zoom: number;
}

class InnerContainer extends React.Component<
  IInnerContainerProps,
  IInnerContainerState
> {
  state = {
    mouseDown: false,
    pos: new Pos(),
    zoom: 1
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

  render() {
    return (
      <React.Fragment>
        <rect
          x={0}
          y={0}
          width="100%"
          height="100%"
          onMouseDown={this.mouseDown}
          fill="transparent"
          className="diagram__rect"
        />
        <g transform={this.transform}>{this.props.children}</g>
      </React.Fragment>
    );
  }
}

export default WindowSub([
  { action: 'mousemove', method: 'mouseMove' },
  { action: 'mouseup', method: 'mouseUp' }
])(InnerContainer);
