import * as React from 'react';
import Text from './util/Text';
import { IEntityChild } from './Entity';
import Pos from '../util/Pos';

interface IContentItemProps extends IEntityChild {
  children: string;
  pos?: Pos;
}

interface IContentItemState {
  editing: boolean;
  pos: Pos;
}

const padding = { width: 40, height: 10 };
const fontSize = 18;

class ContentItem extends React.Component<
  IContentItemProps,
  IContentItemState
> {
  private element: SVGTextElement | HTMLInputElement | null;

  state = {
    editing: false,
    pos: new Pos()
  };

  static getDerivedStateFromProps(
    nextProps: IContentItemProps,
    nextState: IContentItemState
  ) {
    return {
      ...nextState,
      pos: nextProps.pos
    };
  }

  componentDidMount() {
    if (this.element) {
      const { minWidth = 0, onUpdateSize } = this.props;
      const { width } =
        typeof this.element === typeof SVGTextElement
          ? (this.element as SVGTextElement).getBBox()
          : this.element.getBoundingClientRect();

      const newWidth = (width || 10) + padding.width;
      const calculatedWidth = newWidth > minWidth ? newWidth : minWidth;

      if (onUpdateSize) {
        onUpdateSize(calculatedWidth);
      }
    }
  }

  createdText = (element: SVGTextElement | HTMLInputElement | null) => {
    if (element) {
      this.element = element;
    }
  };

  updateText = () => {
    this.setState({ editing: true });
  };

  doubleClick = () => {
    this.setState({ editing: false });
  };

  render() {
    const { pos } = this.state;
    const { children, onMouseDown, minWidth } = this.props;

    return (
      <g className="diagram__content-item">
        <rect
          {...pos}
          transform="translate(-10 0)"
          width={minWidth}
          height={fontSize + padding.height}
          onDoubleClick={this.doubleClick}
          onMouseDown={() => (onMouseDown ? onMouseDown(ContentItem) : null)}
          className="diagram__rect diagram__rect--content"
        />
        <Text
          {...pos}
          dx={0}
          dy={fontSize + padding.height / 3}
          fontFamily="Verdana"
          fontSize={fontSize}
          pointerEvents="none"
          className="diagram__text diagram__text--header"
          createRef={this.createdText}
          onChange={(value: string) => {
            console.log(value);
          }}
          value={children}
        />
      </g>
    );
  }
}

export default ContentItem;
