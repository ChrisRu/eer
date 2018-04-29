import * as React from 'react';
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

interface IAppState {
  settings: Settings;
}

class App extends React.Component<{}, IAppState> {
  state = {
    settings: new Settings()
  };

  updateSettings = (settings: Settings) => this.setState({ settings });

  render() {
    const { settings } = this.state;

    return (
      <div className="app">
        <Navigation
          onUpdateSettings={this.updateSettings}
          settings={settings}
        />
        <Diagram>
          <Grid size={20} visible={settings.grid} />
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
      </div>
    );
  }
}
export default App;
