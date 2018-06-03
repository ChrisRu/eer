import * as React from 'react';
import Pos from '../../util/Pos';

interface IProps {
  onExit: () => void;
  pos: Pos | null;
}

class CreateItem extends React.Component<IProps> {
  get transform() {
    const height = 28;
    const padding = 10;
    const { x, y } = this.props.pos || new Pos();
    return `translate(${x + padding} ${y - height})`;
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
          width={width * 2}
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
            width={width * 2}
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
