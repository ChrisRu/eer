import * as React from 'react';

interface IHeaderProps {
  children?: React.ReactChild;
  x?: number;
  y?: number;
  minWidth?: number;
  onUpdateSize?: (width: number) => void;
}

interface IHeaderState {
  pos: {
    x: number;
    y: number;
  };
  textHeight: number | undefined;
  textWidth: number | undefined;
}

class Header extends React.Component<IHeaderProps, IHeaderState, never> {
  state = {
    pos: {
      x: 0,
      y: 0
    },
    textHeight: undefined,
    textWidth: undefined
  };

  static getDerivedStateFromProps(
    nextProps: IHeaderProps,
    nextState: IHeaderState
  ) {
    return {
      ...nextState,
      pos: {
        x: nextProps.x || 0,
        y: nextProps.y || 0
      }
    };
  }

  createdText = (element: SVGTextElement | null) => {
    if (element) {
      const { height, width } = element.getBBox();

      this.setState({
        textHeight: height,
        textWidth: width
      });

      if (this.props.onUpdateSize) {
        this.props.onUpdateSize(width);
      }
    }
  };

  render() {
    const { pos, textHeight, textWidth } = this.state;
    const { children } = this.props;

    const fontSize = 18;

    return (
      <React.Fragment>
        <rect
          {...pos}
          fill="#ccc"
          transform="translate(-10 0)"
          width={(textWidth || 100) + 20}
          height={(textHeight || fontSize) + 10}
        />
        <text
          {...pos}
          dy={fontSize + 5}
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
