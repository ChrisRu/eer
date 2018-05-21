import * as React from 'react';

interface IProps {
  children: React.ReactNode;
}

const ModalBody = ({ children }: IProps) => (
  <div className="modal__body">{children}</div>
);

export default ModalBody;
