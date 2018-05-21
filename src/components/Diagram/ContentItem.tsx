import * as React from 'react';
import Text from './util/Text';
import { IEntityChild } from './Entity';
import Pos from '../util/Pos';

interface IProps extends IEntityChild {
  children: string;
  pos?: Pos;
  onMouseMove?: (event: MouseEvent) => void;
}

interface IState {
  editing: boolean;
  pos: Pos;
  value: string | undefined;
}

const padding = { width: 40, height: 10 };
const fontSize = 18;

class ContentItem extends React.Component<IProps, IState> {
  private element: SVGTextElement | HTMLInputElement | null;

  state = {
    editing: false,
    pos: new Pos(),
    value: undefined
  };

  static getDerivedStateFromProps(nextProps: IProps, nextState: IState) {
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

  updateText = (value?: string) => {
    this.setState({ value, editing: false });
  };

  doubleClick = () => {
    this.setState({ editing: true });
  };

  render() {
    const { pos, editing, value } = this.state;
    const { children, onMouseDown, minWidth } = this.props;

    return (
      <g className="diagram__content-item">
        <rect
          {...pos.props}
          transform="translate(-10 0)"
          width={minWidth}
          height={fontSize + padding.height}
          onDoubleClick={this.doubleClick}
          onMouseDown={event =>
            onMouseDown ? onMouseDown(ContentItem, event) : null
          }
          className="diagram__rect diagram__rect--content"
        />
        <Text
          {...pos.props}
          editing={editing}
          dx={0}
          dy={fontSize + padding.height / 3}
          fontFamily="Verdana"
          fontSize={fontSize}
          pointerEvents="none"
          className="diagram__text diagram__text--content"
          createRef={this.createdText}
          onChange={this.updateText}
          onCancel={this.updateText}
          width={minWidth}
          height={fontSize + padding.height}
          value={value === undefined ? children : value}
        />
      </g>
    );
  }
}

export default ContentItem;
