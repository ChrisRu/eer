import * as React from 'react';
import { Header, Content } from '..';
import { IEntityChild } from '../Entity';

export type render = (
  props: IEntityChild
) => Array<React.ReactElement<Content | Header>>;

export interface IProps {
  noUpdate: boolean;
  render: render;
  onMouseDown: (type: any, event: React.MouseEvent<any>) => void;
}

interface IState {
  minWidth: number;
}

class GroupChildren extends React.Component<IProps, IState> {
  private tempWidth = 0;

  state = {
    minWidth: 0
  };

  updateSize = (width: number) => {
    if (width > this.tempWidth) {
      this.tempWidth = width;
      this.setState({ minWidth: width });
    }
  };

  render() {
    const { onMouseDown } = this.props;
    const { minWidth } = this.state;

    return this.props.render({
      onMouseDown,
      minWidth,
      onUpdateSize: this.updateSize
    });
  }
}

export default GroupChildren;
