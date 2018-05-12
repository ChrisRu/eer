import * as React from 'react';
import * as cx from 'classnames';

interface IModalFooterProps {
  actions?: IAction[];
}

interface IAction {
  align: string;
  onClick?: () => void;
  name: string;
  type: string;
  element?: 'button' | 'a';
  props?: object;
}

const ModalFooter = ({ actions }: IModalFooterProps) =>
  actions ? (
    <div className="modal__footer">
      {actions.sort(a => +(a.align === 'right')).map(
        (props: IAction) =>
          !props.element || props.element === 'button' ? (
            <button
              className={cx(
                'button',
                `button--${props.type}`,
                `button--${props.align}`
              )}
              key={props.name}
              onClick={props.onClick}
              {...props.props}>
              {props.name}
            </button>
          ) : (
            <a
              className={cx(
                'button',
                `button--${props.type}`,
                `button--${props.align}`
              )}
              key={props.name}
              {...props.props}>
              {props.name}
            </a>
          )
      )}
    </div>
  ) : null;

export default ModalFooter;
