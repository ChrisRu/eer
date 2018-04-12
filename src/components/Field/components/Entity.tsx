import * as React from 'react';
import WindowSub from '../../util/windowSub';

interface IEntityProps {
  children?: React.ReactElement<any> | Array<React.ReactElement<any>>;
  x: number;
  y: number;
}

interface IEntityState {
  minWidth: number;
  mouseDown: boolean;
  pos: {
    x: number;
    y: number;
  };
  transform: {
    x: number;
    y: number;
  };
}

class Entity extends React.Component<IEntityProps, IEntityState, never> {
  state = {
    minWidth: 0,
    mouseDown: false,
    pos: {
      x: 0,
      y: 0
    },
    transform: {
      x: 0,
      y: 0
    }
  };

  static getDerivedStateFromProps(
    nextProps: IEntityProps,
    nextState: IEntityState
  ) {
    return {
      ...nextState,
      pos: {
        x: nextProps.x,
        y: nextProps.y
      }
    };
  }

  mouseMove = (event: MouseEvent) => {
    if (this.state.mouseDown) {
      const { movementX, movementY } = event;

      this.setState(prevState => ({
        transform: {
          x: prevState.transform.x + movementX,
          y: prevState.transform.y + movementY
        }
      }));
    }
  };

  mouseDown = () => {
    this.setState({
      mouseDown: true
    });
  };

  mouseUp = () => {
    this.setState(prevState => ({
      mouseDown: false,
      pos: {
        x: prevState.pos.x + prevState.transform.x,
        y: prevState.pos.y + prevState.transform.y
      },
      transform: {
        x: 0,
        y: 0
      }
    }));
  };

  updateSize = (width: number) => {
    if (this.state.minWidth < width) {
      this.setState({ minWidth: width });
    }
  };

  get transform(): string {
    const { x, y } = this.state.transform;
    return `translate(${x} ${y})`;
  }

  render() {
    const { pos, minWidth } = this.state;

    const children: any[] = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];

    return (
      <g transform={this.transform}>
        {this.props.children
          ? children.map((Child: React.ReactElement<any>) => (
              <Child.type
                {...Child.props}
                key={Child.key}
                {...pos}
                minWidth={minWidth}
                onUpdateSize={this.updateSize}
              />
            ))
          : null}
      </g>
    );
  }
}

export default WindowSub([
  { action: 'mousemove', method: 'mouseMove' },
  { action: 'mouseup', method: 'mouseUp' }
])(Entity);
