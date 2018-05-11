import * as React from 'react';
import { assocPath, path, clone, mergeDeepLeft } from 'ramda';
import Pos from './util/Pos';
import Settings, { IEntity } from './Settings';
import Navigation from './Tools/Navigation/Navigation';
import Diagram, {
  Grid,
  InnerContainer,
  Entity,
  Header,
  Content,
  ContentItem
} from './Diagram';
import ExportModal from './Tools/Modal/Modals/ExportModal';

interface IAppState {
  settings: Settings;
}

class App extends React.Component<{}, IAppState> {
  state = {
    settings: new Settings()
  };

  updateSettings = (settings: Settings) => this.setState({ settings });

  toggleModal = (modalName: string, open?: boolean) => () => {
    const { settings } = this.state;
    const settingPath = ['modals', modalName];

    const newValue = open === undefined ? !path(settingPath, settings) : open;

    this.updateSettings(assocPath(settingPath, newValue, clone(settings)));
  };

  updateEntity = (entity: IEntity, index: number) => (newEntity: IEntity) => {
    const { settings } = this.state;
    const settingPath = ['field', 'entities', index];

    this.updateSettings(
      assocPath(settingPath, mergeDeepLeft(entity, newEntity), clone(settings))
    );
  };

  render() {
    const { settings } = this.state;
    const { modals, field } = settings;

    return (
      <div className="app">
        <Navigation
          onUpdateSettings={this.updateSettings}
          onToggleModal={this.toggleModal}
          settings={settings}
        />

        <Diagram>
          <Grid {...field.grid} />
          <InnerContainer>
            {field.entities.map((entity, index) => (
              <Entity
                pos={new Pos(...entity.pos)}
                onUpdate={this.updateEntity(entity, index)}
                key={entity.header + entity.pos.join('')}>
                <Header>{entity.header}</Header>
                <Content>
                  {entity.content.map(content => (
                    <ContentItem key={content}>{content}</ContentItem>
                  ))}
                </Content>
              </Entity>
            ))}
          </InnerContainer>
        </Diagram>

        <ExportModal
          visible={modals.export}
          onClose={this.toggleModal('export', false)}
        />
      </div>
    );
  }
}
export default App;
