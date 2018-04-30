import * as React from 'react';
import { assocPath, clone } from 'ramda';
import Pos from './util/Pos';
import Settings from './Settings';
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

  closeModal = (type: string) => () =>
    this.updateSettings(
      assocPath(['modals', 'export'], false, clone(this.state.settings))
    );

  render() {
    const { settings } = this.state;
    const { grid, modals } = settings;

    return (
      <div className="app">
        <Navigation
          onUpdateSettings={this.updateSettings}
          settings={settings}
        />

        <Diagram>
          <Grid size={20} visible={grid} />
          <InnerContainer>
            <Entity pos={new Pos(50, 100)}>
              <Header>Tabletest</Header>
              <Content>
                <ContentItem>hmm</ContentItem>
                <ContentItem>dude</ContentItem>
              </Content>
            </Entity>
            <Entity pos={new Pos(500, 500)}>
              <Header>Test 2</Header>
              <Content>
                <ContentItem>Hahahaha</ContentItem>
                <ContentItem>dude</ContentItem>
                <ContentItem>that's perfect</ContentItem>
              </Content>
            </Entity>
          </InnerContainer>
        </Diagram>

        <ExportModal
          visible={modals.export}
          onClose={this.closeModal('export')}
        />
      </div>
    );
  }
}
export default App;
