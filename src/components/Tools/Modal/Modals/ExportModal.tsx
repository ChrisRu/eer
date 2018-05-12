import * as React from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../Modal';

interface IExportModalProps {
  onClose: () => void;
  visible: boolean;
}

const ExportModal = ({ visible, onClose }: IExportModalProps) => {
  const linkType = 'data:image/svg+xml;charset=utf-8';
  const content = encodeURIComponent('<svg><text x="0" y="0">hey</text</svg>');
  const uri = `${linkType},${content}`;

  return (
    <Modal visible={visible} onClose={onClose}>
      <ModalHeader onClose={onClose}>Export Diagram</ModalHeader>
      <ModalBody>
        <table className="table form">
          <tbody>
            <tr className="table__row form__control">
              <td className="form__label">File Name</td>
              <td className="form__input">
                <input
                  className="input"
                  name="file_name"
                  placeholder="eer-diagram"
                />
              </td>
            </tr>
            <tr className="table__row form__control">
              <td className="form__label">Image Type</td>
              <td className="form__input">
                <select className="select" name="image_type" defaultValue="svg">
                  <option value="svg">SVG</option>
                  <option value="png">PNG</option>
                </select>
              </td>
            </tr>
            <tr className="table__row form__control">
              <td className="form__label">Size</td>
              <td className="form__input">
                <select className="select" name="image_size" defaultValue="1x">
                  <option value="1x">1x</option>
                  <option value="1.5x">1.5x</option>
                  <option value="2x">2x</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </ModalBody>
      <ModalFooter
        actions={[
          {
            type: 'tertiary',
            align: 'left',
            name: 'Cancel',
            onClick: onClose
          },
          {
            type: 'primary',
            align: 'right',
            element: 'a',
            props: {
              href: uri,
              download: 'code.txt'
            },
            name: 'Export'
          }
        ]}
      />
    </Modal>
  );
};

export default ExportModal;
