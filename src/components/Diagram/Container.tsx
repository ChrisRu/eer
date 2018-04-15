import * as React from 'react';
import WindowSub from '../util/windowSub';

interface IViewProps {
  children?: Array<React.ReactChild | null> | React.ReactChild | null;
}

interface IViewState {
  size: {
    height: number;
    width: number;
  };
}

class View extends React.Component<IViewProps, IViewState> {
  state = {
    size: {
      height: 0,
      width: 0
    }
  };

  updateSize = () => {
    this.setState({
      size: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    });
  };

  render() {
    const { size } = this.state;
    const { children } = this.props;

    return (
      <svg className="diagram" xmlns="http://www.w3.org/2000/svg" {...size}>
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

export default WindowSub([
  { action: 'resize', method: 'updateSize', init: true }
])(View);
