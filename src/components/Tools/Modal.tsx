import * as React from 'react';
import Transition from 'react-transition-group/Transition';
import * as classnames from 'classnames';
import { debounce } from 'lodash';
import { CrossIcon } from '../util/icons';
import WindowSubComponent from '../util/WindowSubComponent';

const duration = 400;

const defaultStyle = {
  transition: `transform ${duration}ms ease, opacity ${duration}ms ease`
};

const transitionStyles = {
  entered: {
    opacity: 1,
    transform: 'scale(1) translate(-50%, -50%)'
  },
  exiting: {
    transition: `
      transform ${duration}ms cubic-bezier(0.750, 0.000, 0.755, 0.900),
      opacity   ${duration}ms cubic-bezier(0.750, 0.000, 0.755, 0.900)
    `
  },
  exited: {
    transition: `
      transform ${duration}ms cubic-bezier(0.750, 0.000, 0.755, 0.900),
      opacity   ${duration}ms cubic-bezier(0.750, 0.000, 0.755, 0.900)
    `,
    opacity: 0,
    transform: 'scale(0) translate(0, 0)'
  }
};

const ActionButton = ({
  type,
  onClick,
  name,
  callChild,
  align
}: {
  type: string;
  onClick: () => void;
  name: string;
  callChild: (onClick: () => void) => void;
  align: string;
}) => (
  <button
    className={classnames('button', `button--${type}`, 'modal__button', {
      'modal__button-left': align === 'left'
    })}
    onClick={typeof onClick === 'string' ? () => callChild(onClick) : onClick}>
    {name}
  </button>
);

interface IAction {
  type?: string;
  name?: React.ReactNode;
  onClick?: () => void;
  align?: string;
}

interface IModalProps {
  visible: boolean;
  onClose?: () => void;
  title?: string;
  defaultStyle?: object;
  actions: IAction[];
  render: (element: HTMLElement) => void;
  transitionStyles?: object;
}

class Modal extends WindowSubComponent<IModalProps> {
  private child: HTMLElement | null;
  private modal: HTMLElement | null;

  callChild = (methodName: string) => {
    if (this.child && this.child[methodName]) {
      return this.child[methodName].call(this.child);
    } else {
      console.error(`Child method "${methodName}" does not exist`);
    }
  };

  updateSize = () => {
    if (!this.modal) {
      return;
    }

    this.modal.style.minHeight = 'auto';
    this.modal.style.minWidth = 'auto';

    if (this.modal.offsetHeight % 2 !== 0) {
      this.modal.style.minHeight = this.modal.offsetHeight + 1 + 'px';
    }

    if (this.modal.offsetWidth % 2 !== 0) {
      this.modal.style.minWidth = this.modal.offsetWidth + 1 + 'px';
    }
  };

  resize = () => debounce(this.updateSize, 100);

  componentDidUpdate() {
    this.updateSize();
  }

  componentDidMount() {
    this.on('resize', this.resize);
  }

  render() {
    const { children, render, title, onClose, visible, actions } = this.props;

    return (
      <div className="modal__wrapper">
        <Transition in={visible} timeout={0} onEntered={this.updateSize}>
          {(state: any) => (
            <div
              style={{
                ...defaultStyle,
                ...this.props.defaultStyle,
                ...(this.props.transitionStyles
                  ? this.props.transitionStyles[state]
                  : transitionStyles[state])
              }}
              className="modal"
              ref={modal => {
                this.modal = modal;
              }}>
              <h2 className="modal__title">{title}</h2>
              <div className="modal__close">
                <CrossIcon onClick={onClose} />
              </div>
              <div className="modal__body">
                {!children
                  ? render((child: HTMLElement) => {
                      this.child = child;
                    })
                  : children}
              </div>

              {actions ? (
                <div className="modal__footer">
                  {actions
                    .sort(a => +(a.align === 'left'))
                    .map((props: IAction) => (
                      <ActionButton
                        {...props}
                        key={props.type}
                        callChild={this.callChild}
                      />
                    ))}
                </div>
              ) : null}
            </div>
          )}
        </Transition>
        <div
          className={classnames('modal__overlay', { visible })}
          onClick={onClose}
        />
      </div>
    );
  }
}

export default Modal;
