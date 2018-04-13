import * as React from 'react';
import Text from './Text';

interface IContentItemProps {
  children: string;
  x?: number;
  y?: number;
  minWidth?: number;
  onUpdateSize?: (width: number) => void;
  onMouseDown?: (type: any) => void;
}

interface IContentItemState {
  editing: boolean;
  pos: {
    x: number;
    y: number;
  };
  textHeight: number | undefined;
  textWidth: number | undefined;
}

const padding = { width: 40, height: 10 };
const fontSize = 18;

class ContentItem extends React.Component<
  IContentItemProps,
  IContentItemState,
  never
> {
  private element: SVGTextElement | HTMLInputElement | null;

  state = {
    editing: false,
    pos: {
      x: 0,
      y: 0
    },
    textHeight: undefined,
    textWidth: undefined
  };

  static getDerivedStateFromProps(
    nextProps: IContentItemProps,
    nextState: IContentItemState
  ) {
    return {
      ...nextState,
      pos: {
        x: nextProps.x || 0,
        y: nextProps.y || 0
      }
    };
  }

  componentDidMount() {
    if (this.element) {
      const { minWidth = 0, onUpdateSize } = this.props;
      const { height, width } =
        typeof this.element === typeof SVGTextElement
          ? (this.element as SVGTextElement).getBBox()
          : this.element.getBoundingClientRect();

      const newWidth = (width || 10) + padding.width;
      const calculatedWidth = newWidth > minWidth ? newWidth : minWidth;

      this.setState({
        textHeight: height,
        textWidth: calculatedWidth
      });

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
    const { pos, textHeight } = this.state;
    const { children, minWidth, onMouseDown } = this.props;

    return (
      <React.Fragment>
        <rect
          {...pos}
          transform="translate(-10 0)"
          width={minWidth}
          height={(textHeight || fontSize) + padding.height}
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
      </React.Fragment>
    );
  }
}

export default ContentItem;
