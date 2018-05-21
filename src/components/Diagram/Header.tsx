import * as React from 'react';
import Pos from '../util/Pos';
import { IEntityChild } from './Entity';

interface IProps extends IEntityChild {
  children?: React.ReactNode;
  pos?: Pos;
}

interface IState {
  pos: Pos;
}

const padding = { width: 40, height: 10 };
const fontSize = 18;

class Header extends React.Component<IProps, IState> {
  private element: SVGTextElement | null;

  state = {
    pos: new Pos()
  };

  static getDerivedStateFromProps(nextProps: IProps, nextState: IState) {
    const { x, y } = nextProps.pos || new Pos();
    return {
      ...nextState,
      pos: new Pos(x, y)
    };
  }

  componentDidMount() {
    if (this.element) {
      const { minWidth = 0, onUpdateSize } = this.props;
      const { width } = this.element.getBBox();

      const newWidth = (width || 10) + padding.width;
      const calculatedWidth = newWidth > minWidth ? newWidth : minWidth;

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
    const { pos } = this.state;
    const { children, onMouseDown, minWidth } = this.props;

    return (
      <g className="diagram__header">
        <rect
          {...pos.props}
          transform="translate(-10 0)"
          width={minWidth}
          height={fontSize + padding.height}
          onMouseDown={event =>
            onMouseDown ? onMouseDown(Header, event) : null
          }
          className="diagram__rect diagram__rect--header"
        />
        <text
          {...pos.props}
          dy={fontSize + padding.height / 4}
          fontFamily="Verdana"
          fontSize={fontSize}
          pointerEvents="none"
          className="diagram__text diagram__text--header"
          ref={this.createdText}>
          {children}
        </text>
      </g>
    );
  }
}

export default Header;
