import * as React from 'react';

interface IGridProps {
  size?: number;
  spacing?: number;
  color?: string;
}

class Grid extends React.Component<IGridProps> {
  render() {
    const { size = 30, spacing = 8, color = '#bbb' } = this.props;

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
              stroke={color}
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
            />
            <path
              d={`M ${size * spacing} 0 L 0 0 0 ${size * spacing}`}
              fill="none"
              stroke={color}
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </React.Fragment>
    );
  }
}

export default Grid;
