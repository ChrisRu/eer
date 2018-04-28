import * as React from 'react';
import * as classnames from 'classnames';

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
      {actions.sort(a => +(a.align === 'left')).map((props: IAction) => (
        <button
          className={classnames(
            'button',
            `button--${props.type}`,
            'modal__footer-button',
            {
              'modal__footer-button--left': props.align === 'left'
            }
          )}
          onClick={props.onClick}>
          {props.name}
        </button>
      ))}
    </div>
  ) : null;

export default ModalFooter;
