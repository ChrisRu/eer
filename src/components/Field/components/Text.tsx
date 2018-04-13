import * as React from 'react';

interface ITextProps {
  onChange: (value: string) => any;
  value?: string;
  createRef?: (element: SVGTextElement | HTMLInputElement | null) => void;
  [x: string]: any;
}

interface ITextState {
  value: string;
  editing: boolean;
}

class Text extends React.Component<ITextProps, ITextState, never> {
  state = {
    value: '',
    editing: false
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

  onClick = () => {
    this.setState({ editing: true });
  };

  onChange = (event: React.ChangeEvent<any>) => {
    console.log(event);
    this.setState({ value: event.target.value });
  };

  render() {
    const { value, editing } = this.state;
    const { onChange, createRef, ...props } = this.props;

    return editing ? (
      <foreignObject x={-5} width={100} height={32}>
        <input
          ref={createRef}
          type="text"
          onChange={this.onChange}
          value={value}
          width={100}
          height={32}
        />
      </foreignObject>
    ) : (
      <text
        className="clickable"
        ref={createRef}
        onDoubleClick={this.onClick}
        {...props}>
        {value}
      </text>
    );
  }
}

export default Text;
