import * as React from 'react';
import Group from '../util/Group';
import Pos from '../../util/Pos';

interface IEntityProps {
  children?: React.ReactElement<any> | Array<React.ReactElement<any>>;
  pos: Pos;
}

interface IEntityState {
  minWidth: number;
}

let tempWidth = 0;

class Entity extends React.Component<IEntityProps, IEntityState, never> {
  state = {
    minWidth: 0
  };

  updateSize = (width: number) => {
    if (width > tempWidth) {
      tempWidth = width;
      this.setState({ minWidth: width });
    }
  };

  render() {
    const { pos, children } = this.props;
    const { minWidth } = this.state;

    const childComponents: any[] = children
      ? Array.isArray(children) ? children : [children]
      : [];

    return (
      <Group
        pos={pos}
        movable={true}
        render={onMouseDown =>
          childComponents.map((Child: React.ReactElement<any>, index) => (
            <Child.type
              {...Child.props}
              y={index * 32}
              key={Child.props.children}
              minWidth={minWidth}
              onUpdateSize={this.updateSize}
              onMouseDown={onMouseDown}
            />
          ))
        }
      />
    );
  }
}

export default Entity;
