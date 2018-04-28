import * as React from 'react';
import { CrossIcon } from '../../util/icons';

interface IModalHeaderProps {
  title?: string;
  onClose?: () => void;
}

const ModalHeader = ({ title, onClose }: IModalHeaderProps) => (
  <div className="modal__header">
    <h2 className="modal__header-title">{title}</h2>
    {onClose ? (
      <div className="modal__header-close">
        <CrossIcon onClick={onClose} />
      </div>
    ) : null}
  </div>
);

export default ModalHeader;
