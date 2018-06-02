import * as React from 'react';
import Pos from '../../util/Pos';
import WindowSubComponent from '../../util/sub/WindowSubComponent';
import GroupChildren, { render } from './GroupChildren';
import { Header } from '..';

interface IProps {
  movable?: boolean;
  pos: Pos;
  render: render;
  onMove?: (entity: any) => void;
}

interface IState {
  mouseDown: boolean;
  movingPos: Pos;
  transform: Pos;
  posUpdate: boolean;
}

let startMovingPos: Pos | null = null;

class Group extends WindowSubComponent<IProps, IState> {
  state = {
    mouseDown: false,
    transform: new Pos(),
    movingPos: new Pos(),
    posUpdate: false
  };

  static getDerivedStateFromProps(nextProps: IProps, nextState: IState) {
    const { x, y } = nextState.transform.initialized
      ? nextState.transform
      : nextProps.pos || new Pos();
    return {
      ...nextState,
      transform: new Pos(x, y)
    };
  }

  mouseMove = ({ pageX, pageY }: MouseEvent) => {
    if (this.state.mouseDown) {
      const xDiff = startMovingPos ? pageX - startMovingPos.x : 0;
      const yDiff = startMovingPos ? pageY - startMovingPos.y : 0;

      this.setState({
        movingPos: new Pos(xDiff, yDiff),
        posUpdate: true
      });
    }
  };

  mouseDown = (type: any, event: React.MouseEvent<any>) => {
    if (this.props.movable === false) {
      return;
    }

    if (type === Header) {
      this.setState({
        mouseDown: true,
        posUpdate: true
      });

      startMovingPos = new Pos(event.pageX, event.pageY);
    }
  };

  mouseUp = () => {
    if (this.state.movingPos.initialized === false) {
      return;
    }

    const { onMove } = this.props;

    if (onMove) {
      const { x, y } = this.state.transform.add(this.state.movingPos);
      onMove({ pos: [x, y] });
    }

    startMovingPos = null;
  };

  get transform() {
    const { transform, movingPos } = this.state;
    const { x, y } = transform.add(movingPos);
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
