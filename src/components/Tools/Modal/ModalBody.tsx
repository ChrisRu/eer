import * as React from 'react';

interface IModalBodyProps {
  children: React.ReactNode;
}

const ModalBody = ({ children }: IModalBodyProps) => (
  <div className="modal__body">{children}</div>
);

export default ModalBody;
