import * as React from 'react';
import { ContentItem } from '.';
import { IEntityChild } from './Entity';
import Pos from '../util/Pos';

interface IContentProps extends IEntityChild {
  children:
    | Array<React.ReactElement<ContentItem>>
    | React.ReactElement<ContentItem>;
  x?: number;
  y?: number;
}

class Content extends React.Component<IContentProps> {
  get transform(): string {
    const { x = 0, y = 0 } = this.props;

    return `translate(${x} ${y})`;
  }

  render() {
    const { children, minWidth, onUpdateSize, onMouseDown } = this.props;
    const items: any[] = Array.isArray(children) ? children : [children];

    return (
      <g transform={this.transform} className="diagram__content">
        {items.map((Item: React.ReactElement<any>, index) => (
          <Item.type
            key={Item.props.children}
            pos={new Pos(0, index * 28)}
            {...Item.props}
            minWidth={minWidth}
            onUpdateSize={onUpdateSize}
            onMouseDown={onMouseDown}
          />
        ))}
      </g>
    );
  }
}

export default Content;
