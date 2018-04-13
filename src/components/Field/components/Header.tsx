import * as React from 'react';
import Pos from '../../util/Pos';
import * as classNames from 'classnames';

interface IHeaderProps {
  children?: React.ReactChild;
  pos?: Pos;
  minWidth?: number;
  onUpdateSize?: (width: number) => void;
  onMouseDown?: (type: any) => void;
}

interface IHeaderState {
  pos: Pos;
  textHeight: number | undefined;
  textWidth: number | undefined;
}

const padding = { width: 40, height: 10 };
const fontSize = 18;

class Header extends React.Component<IHeaderProps, IHeaderState, never> {
  private element: SVGTextElement | null;

  state = {
    pos: new Pos(),
    textHeight: undefined,
    textWidth: undefined
  };

  static getDerivedStateFromProps(
    nextProps: IHeaderProps,
    nextState: IHeaderState
  ) {
    const { x, y } = nextProps.pos || new Pos();
    return {
      ...nextState,
      pos: new Pos(x, y)
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
    const { children, onMouseDown, minWidth } = this.props;

    return (
      <React.Fragment>
        <rect
          {...pos}
          fill="#ddd"
          transform="translate(-10 0)"
          width={minWidth}
          height={(textHeight || fontSize) + padding.height}
          onMouseDown={() => (onMouseDown ? onMouseDown(Header) : null)}
          className={classNames({ clickable: !!onMouseDown }, 'header')}
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

export default Header;
