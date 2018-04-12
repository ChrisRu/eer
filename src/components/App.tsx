import * as React from 'react';
import Entity from './Field/components/Entity';
import Grid from './Field/components/Grid';
import Header from './Field/components/Header';
import Container from './Field/Container';
import InnerContainer from './Field/InnerContainer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Container>
          <Grid />
          <InnerContainer>
            <Entity x={0} y={100}>
              <Header>Test</Header>
            </Entity>
            <Entity x={200} y={300} />
          </InnerContainer>
        </Container>
      </div>
    );
  }
}

export default App;
