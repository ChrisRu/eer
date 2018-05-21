import * as React from 'react';
import { clone, assocPath, path } from 'ramda';
import Pos from './util/Pos';
import Settings from './Settings';
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
  state = {
    settings: new Settings()
  };

  updateSettings = (settings: Settings) => this.setState({ settings });

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

  render() {
    const { settings } = this.state;
    const { field, modals } = settings;

    console.log(field);

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
                pos={new Pos(...entity.pos)}
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
