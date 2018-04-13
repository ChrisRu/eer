import * as React from 'react';
import ContentItem from './ContentItem';

interface IContentProps {
  children:
    | Array<React.ReactElement<ContentItem>>
    | React.ReactElement<ContentItem>;
  x?: number;
  y?: number;
  minWidth?: number;
  onUpdateSize?: (width: number) => void;
}

// interface IContentState {}

class Content extends React.Component<IContentProps, {}, never> {
  state = {};

  get transform(): string {
    const { x = 0, y = 0 } = this.props;

    return `translate(${x} ${y})`;
  }

  render() {
    const { children, minWidth } = this.props;

    const items: any[] = Array.isArray(children) ? children : [children];

    return (
      <g transform={this.transform}>
        {items.map((Item: React.ReactElement<ContentItem>, index) => (
          <Item.type
            y={index * 32}
            {...Item.props}
            onUpdateSize={this.props.onUpdateSize}
            minWidth={minWidth}
          />
        ))}
      </g>
    );
  }
}

export default Content;
