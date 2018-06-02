import * as React from 'react';
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../Modal';
import Icon from '../../../util/Icon';

interface IProps {
  onClose: () => void;
  visible: boolean;
}

interface IState {
  fileName: string;
  imageType: string;
  imageSize: number;
}

class ExportModal extends React.PureComponent<IProps, IState> {
  state = {
    fileName: '',
    imageType: 'svg',
    imageSize: 10
  };

  render() {
    const { visible, onClose } = this.props;
    const { fileName, imageType, imageSize } = this.state;

    const linkType = 'data:image/svg+xml;charset=utf-8';
    const diagram = document.getElementById('svg_diagram');

    if (!diagram) {
      return (
        <Modal visible={visible} onClose={onClose}>
          <ModalHeader onClose={onClose}>Export Diagram</ModalHeader>
          <ModalBody>Can't export at the moment</ModalBody>
        </Modal>
      );
    }

    const content = encodeURIComponent(diagram.outerHTML);
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
                    value={fileName}
                    onChange={({ target }) =>
                      this.setState({ fileName: target.value })
                    }
                  />
                </td>
              </tr>
              <tr className="table__row form__control">
                <td className="form__label">Image Type</td>
                <td className="form__input">
                  <select
                    className="select"
                    name="image_type"
                    value={imageType}
                    onChange={({ target }) =>
                      this.setState({ imageType: target.value })
                    }>
                    <option value="svg">SVG</option>
                    <option value="png">PNG</option>
                  </select>
                </td>
              </tr>
              <tr className="table__row form__control">
                <td className="form__label">Size</td>
                <td className="form__input">
                  <input
                    className="range"
                    type="range"
                    min={5}
                    max={20}
                    step={5}
                    name="image_size"
                    value={imageSize}
                    onChange={({ target }) =>
                      this.setState({ imageSize: Number(target.value) })
                    }
                  />
                  <span className="range-value">{imageSize / 10}x</span>
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
                download: 'diagram.svg'
              },
              name: (
                <React.Fragment>
                  <Icon name="download" title="Export File" /> Export
                </React.Fragment>
              )
            }
          ]}
        />
      </Modal>
    );
  }
}

export default ExportModal;
