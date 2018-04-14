import * as React from 'react';
import Pos from '../../util/Pos';
import WindowSub from '../../util/windowSub';
import GroupChildren, { render } from './GroupChildren';
import { Header } from '..';

interface IGroupProps {
  movable?: boolean;
  pos: Pos;
  render: render;
}

interface IGroupState {
  mouseDown: boolean;
  transform: Pos;
  posUpdate: boolean;
}

class Group extends React.Component<IGroupProps, IGroupState> {
  state = {
    mouseDown: false,
    transform: new Pos(),
    posUpdate: false
  };

  static getDerivedStateFromProps(
    nextProps: IGroupProps,
    nextState: IGroupState
  ) {
    const { x, y } = nextProps.pos || new Pos();
    return {
      ...nextState,
      transform: new Pos(x, y)
    };
  }

  mouseMove = (event: MouseEvent) => {
    if (this.state.mouseDown) {
      const { movementX, movementY } = event;

      if (movementX !== 0 || movementY !== 0) {
        this.setState(prevState => ({
          transform: prevState.transform.add(new Pos(movementX, movementY)),
          posUpdate: true
        }));
      }
    }
  };

  mouseDown = (type: any) => {
    if (type === Header) {
      if (this.props.movable) {
        this.setState({
          mouseDown: true,
          posUpdate: true
        });
      }
    }
  };

  mouseUp = () => {
    this.setState({
      mouseDown: false,
      posUpdate: true
    });
  };

  get transform() {
    const { x, y } = this.state.transform;
    return `translate(${x} ${y})`;
  }

  render() {
    const { posUpdate } = this.state;

    return (
      <g filter="url(#box-shadow)" transform={this.transform}>
        <GroupChildren
          noUpdate={posUpdate}
          render={this.props.render}
          onMouseDown={this.mouseDown}
        />
      </g>
    );
  }
}

export default WindowSub([
  { action: 'mousemove', method: 'mouseMove' },
  { action: 'mouseup', method: 'mouseUp' }
])(Group);
