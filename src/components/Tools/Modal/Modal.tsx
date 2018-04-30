import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import * as cx from 'classnames';

interface IModalProps {
  visible: boolean;
  onClose: () => void;
  defaultStyle?: object;
  children: React.ReactNode;
  transitionStyles?: object;
}

const Modal = ({
  children,
  onClose,
  visible,
  defaultStyle = {},
  transitionStyles = {}
}: IModalProps) => (
  <div className="modal__wrapper">
    <CSSTransition
      in={visible}
      timeout={30000}
      unmountOnExit
      classNames="pop-in">
      {(state: any) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
          className="modal">
          {children}
        </div>
      )}
    </CSSTransition>
    <div className={cx('modal__overlay', { visible })} onClick={onClose} />
  </div>
);

export { default as ModalHeader } from './ModalHeader';
export { default as ModalBody } from './ModalBody';
export { default as ModalFooter } from './ModalFooter';
export default Modal;
