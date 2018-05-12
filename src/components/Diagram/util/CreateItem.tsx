import * as React from 'react';
import Pos from '../../util/Pos';

interface ICreateItemProps {
  onExit: () => void;
  pos: Pos | null;
}

class CreateItem extends React.Component<ICreateItemProps> {
  get transform() {
    const { x, y } = this.props.pos || new Pos();
    return `translate(${x + 10} ${y - 28})`;
  }

  shouldComponentUpdate({ pos }: ICreateItemProps) {
    if (pos === this.props.pos) {
      return false;
    }

    if (pos && this.props.pos && pos.equals(this.props.pos)) {
      return false;
    }

    return true;
  }

  render() {
    const { pos } = this.props;

    if (pos === null) {
      return null;
    }

    const width = 100;
    const height = 28;
    const padding = 10;

    return (
      <g transform={this.transform}>
        <rect
          x={-padding}
          y={0}
          height={height * 1}
          width={width + padding * 2}
          className="diagram__rect diagram__rect--header"
        />
        <text
          className="diagram__text diagram__text--content"
          pointerEvents="none"
          dy={height * 0.75}
          width={width}>
          Create Item
        </text>
        <g transform="translate(0, 28)">
          <rect
            x={-padding}
            y={0}
            height={height * 2}
            width={width + padding * 2}
            className="diagram__rect diagram__rect--content"
          />
          <text
            className="diagram__text diagram__text--content"
            pointerEvents="none"
            dy={height * 0.75}
            height={height}
            width={width}>
            Action
          </text>
          <text
            className="diagram__text diagram__text--content"
            pointerEvents="none"
            dy={height * 0.75}
            y={height}
            height={height}
            width={width}>
            Table
          </text>
        </g>
      </g>
    );
  }
}

export default CreateItem;
