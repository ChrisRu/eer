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

let tempWidth = 0;

class GroupChildren extends React.Component<IProps, IState> {
  state = {
    minWidth: 0
  };

  updateSize = (width: number) => {
    if (width > tempWidth) {
      tempWidth = width;
      this.setState({ minWidth: width });
    }
  };

  shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    if (nextState.minWidth !== this.state.minWidth) {
      return true;
    }

    return false;
  }

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
