import * as React from 'react';
import Pos from '../../util/Pos';
import WindowSubComponent from '../../util/sub/WindowSubComponent';
import GroupChildren, { render } from './GroupChildren';
import { Header } from '..';

interface IGroupProps {
  movable?: boolean;
  pos: Pos;
  render: render;
  onMove?: (entity: any) => void;
}

interface IGroupState {
  mouseDown: boolean;
  transform: Pos;
  posUpdate: boolean;
}

class Group extends WindowSubComponent<IGroupProps, IGroupState> {
  state = {
    mouseDown: false,
    transform: new Pos(),
    posUpdate: false
  };

  static getDerivedStateFromProps(
    nextProps: IGroupProps,
    nextState: IGroupState
  ) {
    const { x, y } = nextState.transform.initialized
      ? nextState.transform
      : nextProps.pos || new Pos();
    return {
      ...nextState,
      transform: new Pos(x, y)
    };
  }

  mouseMove = (event: MouseEvent) => {
    if (this.state.mouseDown) {
      const { movementX, movementY } = event;

      if (movementX !== 0 || movementY !== 0) {
        this.setState(({ transform }) => ({
          transform: transform.add(new Pos(movementX, movementY)),
          posUpdate: true
        }));
      }
    }
  };

  mouseDown = (type: any) => {
    if (this.props.movable === false) {
      return;
    }

    if (type === Header) {
      this.setState({
        mouseDown: true,
        posUpdate: true
      });
    }
  };

  mouseUp = () => {
    const { onMove } = this.props;

    this.setState(
      {
        mouseDown: false,
        posUpdate: true
      },
      () => {
        if (onMove) {
          const { x, y } = this.state.transform;
          onMove({ pos: [x, y] });
        }
      }
    );
  };

  get transform() {
    const { x, y } = this.state.transform;
    return `translate(${x} ${y})`;
  }

  componentDidMount() {
    this.on('mousemove', this.mouseMove);
    this.on('mouseup', this.mouseUp);
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

export default Group;
