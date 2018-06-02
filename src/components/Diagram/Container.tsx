import * as React from 'react';
import WindowSubComponent from '../util/sub/WindowSubComponent';

interface IProps {
  children: React.ReactNode;
}

interface IState {
  height: number;
  width: number;
}

class View extends WindowSubComponent<IProps, IState> {
  state = {
    height: 0,
    width: 0
  };

  updateSize = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  componentDidMount() {
    this.on('resize', this.updateSize);
  }

  render() {
    const { height, width } = this.state;
    const { children } = this.props;

    return (
      <svg
        id="svg_diagram"
        className="diagram"
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}>
        <defs>
          <filter id="box-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
            <feColorMatrix
              result="matrixOut"
              in="offOut"
              type="matrix"
              values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
            />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="0.2" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        {children}
      </svg>
    );
  }
}

export default View;
