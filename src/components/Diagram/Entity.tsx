import * as React from 'react';
import Group from './util/Group';
import Pos from '../util/Pos';

interface IProps {
  children?: React.ReactNode;
  pos: Pos;
  onUpdate?: (entity: any) => void;
}

interface IState {
  minWidth: number;
}

export interface IEntityChild {
  minWidth?: number;
  onUpdateSize?: (width: number) => void;
  onMouseDown?: (type: any, event: React.MouseEvent<any>) => void;
}

class Entity extends React.Component<IProps, IState> {
  render() {
    const { pos, children, onUpdate } = this.props;

    const childComponents: any[] = children
      ? Array.isArray(children)
        ? children
        : [children]
      : [];

    return (
      <Group
        pos={pos}
        onMove={onUpdate}
        movable
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
