import * as React from 'react';

interface ITextProps {
  onChange: (value: string) => any;
  value?: string;
  createRef?: (element: SVGTextElement | HTMLInputElement | null) => void;
  [x: string]: any;
}

interface ITextState {
  value: string;
}

class Text extends React.Component<ITextProps, ITextState> {
  state = {
    value: ''
  };

  static getDerivedStateFromProps(
    nextProps: ITextProps,
    nextState: ITextState
  ) {
    return {
      ...nextState,
      value: nextProps.value || ''
    };
  }

  onChange = (event: React.ChangeEvent<any>) => {
    console.log(event);
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    const { onChange, createRef, editing, ...props } = this.props;

    return editing ? (
      <foreignObject x={-5} width={100} height={32}>
        <input
          ref={createRef}
          type="text"
          onChange={this.onChange}
          value={value}
          className="input input--diagram"
        />
      </foreignObject>
    ) : (
      <text ref={createRef} {...props}>
        {value}
      </text>
    );
  }
}

export default Text;
