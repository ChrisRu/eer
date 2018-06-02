import * as React from 'react';
import { clone, assocPath, path, merge } from 'ramda';
import Pos from './util/Pos';
import Settings, { IEntity } from './Settings';
import Navigation from './Tools/Navigation/Navigation';
import ExportModal from './Tools/Modal/Modals/ExportModal';
import Diagram, {
  Grid,
  InnerContainer,
  Entity,
  Header,
  Content,
  ContentItem
} from './Diagram';

interface IState {
  settings: Settings;
}

class App extends React.Component<{}, IState> {
  private localStorage = 'settings';

  state = {
    settings: new Settings()
  };

  componentDidMount() {
    this.getSettingsFromStorage();
  }

  setSettingsInStorage = (settings: Settings) => {
    const storedSettings = JSON.stringify(settings);
    window.localStorage.setItem(this.localStorage, storedSettings);
  };

  getSettingsFromStorage = () => {
    const storedSettings = window.localStorage.getItem(this.localStorage);
    if (storedSettings) {
      this.setState({
        settings: JSON.parse(storedSettings)
      });
    }
  };

  updateSettings = (settings: Settings) => {
    this.setState({ settings });
  };

  toggleModal = (name: string, open?: boolean) => () => {
    this.setState(prevState =>
      assocPath(
        ['settings', 'modals', name],
        open !== undefined
          ? open
          : !path(['settings', 'modals', name], prevState),
        clone(prevState)
      )
    );
  };

  updateEntity = (index: number) => (entity: IEntity) => {
    const entityPath = ['settings', 'field', 'entities', index];
    this.setState(prevState =>
      assocPath(
        entityPath,
        merge(path(entityPath, prevState), entity),
        prevState
      )
    );
  };

  render() {
    const { settings } = this.state;
    const { field, modals } = settings;

    return (
      <div className="app">
        <Navigation
          settings={settings}
          onUpdateSettings={this.updateSettings}
          onToggleModal={this.toggleModal}
        />

        <Diagram>
          <Grid {...field.grid} />
          <InnerContainer>
            {field.entities.map((entity, index) => (
              <Entity
                onUpdate={this.updateEntity(index)}
                pos={new Pos(...entity.pos)}
                key={entity.header + entity.pos.join('')}>
                <Header>{entity.header}</Header>
                <Content onUpdate={this.updateEntity(index)}>
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
