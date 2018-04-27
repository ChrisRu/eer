import * as React from 'react';

interface IGridProps {
  size?: number;
  spacing?: number;
  color?: string;
  visible?: boolean;
}

class Grid extends React.Component<IGridProps> {
  render() {
    const { size = 30, spacing = 8, visible = true } = this.props;

    return (
      <React.Fragment>
        <defs>
          <pattern
            id="smallGrid"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse">
            <path
              d={`M ${size} 0 L 0 0 0 ${size}`}
              fill="none"
              className="diagram__grid-line"
              strokeWidth="0.5"
            />
          </pattern>

          <pattern
            id="grid"
            width={size * spacing}
            height={size * spacing}
            patternUnits="userSpaceOnUse">
            <rect
              width={size * spacing}
              height={size * spacing}
              fill="url(#smallGrid)"
              className="diagram__rect"
            />
            <path
              d={`M ${size * spacing} 0 L 0 0 0 ${size * spacing}`}
              fill="none"
              className="diagram__grid-line"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill={visible ? 'url(#grid)' : 'transparent'}
          className="diagram__rect diagram__grid"
        />
      </React.Fragment>
    );
  }
}

export default Grid;
