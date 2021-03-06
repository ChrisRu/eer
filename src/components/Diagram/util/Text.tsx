import * as React from 'react';

interface IProps {
  onChange: (value: string) => void;
  onCancel: () => void;
  value: string;
  createRef?: (element: SVGTextElement | HTMLInputElement | null) => void;
  [x: string]: any;
}

interface IState {
  value: string;
}

class Text extends React.Component<IProps, IState> {
  state = {
    value: ''
  };

  static getDerivedStateFromProps(nextProps: IProps, nextState: IState) {
    return {
      ...nextState,
      value: nextProps.value || ''
    };
  }

  change = (event: React.ChangeEvent<any>) => {
    this.setState({ value: event.target.value });
  };

  keyDown = (event: React.KeyboardEvent<any>) => {
    if (event.keyCode === 13) {
      this.props.onChange(this.state.value);
    } else if (event.keyCode === 27) {
      this.props.onCancel();
    }
  };

  render() {
    const { value } = this.state;
    const {
      onChange,
      createRef,
      editing,
      width,
      height,
      y,
      ...props
    } = this.props;

    const padding = 10;

    return editing ? (
      <foreignObject x={-padding} y={y + 1} width={width} height={height}>
        <input
          ref={createRef}
          type="text"
          onChange={this.change}
          onKeyDown={this.keyDown}
          autoFocus
          value={value}
          className="input diagram__input"
        />
      </foreignObject>
    ) : (
      <text ref={createRef} y={y} {...props}>
        {value}
      </text>
    );
  }
}

export default Text;
