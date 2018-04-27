import * as React from 'react';
import Group from './util/Group';
import Pos from '../util/Pos';

interface IEntityProps {
  children?: React.ReactNode;
  pos: Pos;
}

interface IEntityState {
  minWidth: number;
}

export interface IEntityChild {
  minWidth?: number;
  onUpdateSize?: (width: number) => void;
  onMouseDown?: (type: any) => void;
}

class Entity extends React.Component<IEntityProps, IEntityState> {
  render() {
    const { pos, children } = this.props;

    const childComponents: any[] = children
      ? Array.isArray(children)
        ? children
        : [children]
      : [];

    return (
      <Group
        pos={pos}
        movable={true}
        render={({ onMouseDown, minWidth, onUpdateSize }) =>
          childComponents.map((Child: React.ReactElement<any>, index) => (
            <Child.type
              {...Child.props}
              y={index * 28}
              key={Child.props.children}
              onMouseDown={onMouseDown}
              onUpdateSize={onUpdateSize}
              minWidth={minWidth}
            />
          ))
        }
      />
    );
  }
}

export default Entity;
