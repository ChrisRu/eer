import * as React from 'react';
import Pos from '../../util/Pos';
import WindowSub from '../../util/windowSub';
import Header from '../components/Header';
import Content from '../components/Content';

interface IGroupProps {
  movable?: boolean;
  pos: Pos;
  render: (
    onMouseDown: (type: string) => void
  ) => Array<React.ReactElement<Content | Header>>;
}

interface IGroupState {
  mouseDown: boolean;
  transform: Pos;
}

class Group extends React.Component<IGroupProps, IGroupState, never> {
  state = {
    mouseDown: false,
    transform: new Pos()
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

      this.setState(prevState => ({
        transform: prevState.transform.add(new Pos(movementX, movementY))
      }));
    }
  };

  mouseDown = (type: any) => {
    if (type === Header) {
      if (this.props.movable) {
        this.setState({
          mouseDown: true
        });
      }
    }
  };

  mouseUp = () => {
    this.setState(prevState => ({
      mouseDown: false
    }));
  };

  get transform() {
    const { x, y } = this.state.transform;
    return `translate(${x} ${y})`;
  }

  render() {
    return (
      <g filter="url(#box-shadow)" transform={this.transform}>
        {this.props.render(this.mouseDown)}
      </g>
    );
  }
}

export default WindowSub([
  { action: 'mousemove', method: 'mouseMove' },
  { action: 'mouseup', method: 'mouseUp' }
])(Group);
