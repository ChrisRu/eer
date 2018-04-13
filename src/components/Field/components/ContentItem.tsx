import * as React from 'react';
import * as classNames from 'classnames';

interface IContentItemProps {
  children?: React.ReactChild;
  x?: number;
  y?: number;
  minWidth?: number;
  onUpdateSize?: (width: number) => void;
  onMouseDown?: (type: any) => void;
}

interface IContentItemState {
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
  private element: SVGTextElement | null;

  state = {
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
      const { height, width } = this.element.getBBox();

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

  createdText = (element: SVGTextElement | null) => {
    if (element) {
      this.element = element;
    }
  };

  render() {
    const { pos, textHeight } = this.state;
    const { children, minWidth, onMouseDown } = this.props;

    return (
      <React.Fragment>
        <rect
          {...pos}
          fill="#F9F9F9"
          transform="translate(-10 0)"
          width={minWidth}
          height={(textHeight || fontSize) + padding.height}
          onMouseDown={() => (onMouseDown ? onMouseDown(ContentItem) : null)}
          className={classNames({ clickable: !!onMouseDown }, 'ContentItem')}
        />
        <text
          {...pos}
          dx={padding.width / 4}
          dy={fontSize + padding.height / 2}
          fontFamily="Verdana"
          fontSize={fontSize}
          pointerEvents="none"
          ref={this.createdText}>
          {children}
        </text>
      </React.Fragment>
    );
  }
}

export default ContentItem;
