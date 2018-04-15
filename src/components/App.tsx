import * as React from 'react';
import Pos from './util/Pos';
import Navigation from './Tools/Navigation';
import Diagram, {
  Grid,
  InnerContainer,
  Entity,
  Header,
  Content,
  ContentItem
} from './Diagram';
import Settings from './Settings';

interface IAppState {
  settings: Settings;
}

class App extends React.Component<{}, IAppState> {
  state = {
    settings: new Settings()
  };

  updateSettings = (settings: Settings) => {
    console.log(settings);
    this.setState({ settings });
  };

  render() {
    const { settings } = this.state;

    return (
      <div className="app">
        <Navigation
          onUpdateSettings={this.updateSettings}
          settings={settings}
        />
        <Diagram>
          {settings.grid ? <Grid size={20} /> : null}
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
