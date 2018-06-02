import * as React from 'react';
import Icon from '../../util/Icon';

interface IProps {
  children?: React.ReactNode;
  onClose?: () => void;
}

const ModalHeader = ({ children, onClose }: IProps) => (
  <div className="modal__header">
    <h2 className="modal__header-title">{children}</h2>
    {onClose ? (
      <div className="modal__header-close">
        <Icon name="cross" onClick={onClose} />
      </div>
    ) : null}
  </div>
);

export default ModalHeader;
