import * as React from 'react';
import * as cx from 'classnames';

interface IModalFooterProps {
  actions?: IAction[];
}

interface IAction {
  align: string;
  onClick: () => void;
  name: string;
  type: string;
}

const ModalFooter = ({ actions }: IModalFooterProps) =>
  actions ? (
    <div className="modal__footer">
      {actions.sort(a => +(a.align === 'right')).map((props: IAction) => (
        <button
          className={cx(
            'button',
            `button--${props.type}`,
            `button--${props.align}`
          )}
          key={props.name}
          onClick={props.onClick}>
          {props.name}
        </button>
      ))}
    </div>
  ) : null;

export default ModalFooter;
