import * as React from 'react';
import { CrossIcon } from '../../util/icons';

interface IProps {
  children?: React.ReactNode;
  onClose?: () => void;
}

const ModalHeader = ({ children, onClose }: IProps) => (
  <div className="modal__header">
    <h2 className="modal__header-title">{children}</h2>
    {onClose ? (
      <div className="modal__header-close">
        <CrossIcon onClick={onClose} />
      </div>
    ) : null}
  </div>
);

export default ModalHeader;
