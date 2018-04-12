import * as React from 'react';

interface IViewProps {
  children?: React.ReactChild[] | React.ReactChild;
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

  updateSize = (): void => {
    this.setState({
      size: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    });
  };

  componentDidMount() {
    this.updateSize();

    window.addEventListener('resize', this.updateSize);
  }

  render() {
    return (
      <svg
        className="view"
        xmlns="http://www.w3.org/2000/svg"
        {...this.state.size}>
        {this.props.children}
      </svg>
    );
  }
}

export default View;
