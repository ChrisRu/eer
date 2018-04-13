import * as React from 'react';
import Pos from './util/Pos';
import Content from './Field/components/Content';
import ContentItem from './Field/components/ContentItem';
import Entity from './Field/components/Entity';
import Grid from './Field/components/Grid';
import Header from './Field/components/Header';
import Container from './Field/Container';
import InnerContainer from './Field/InnerContainer';

const App = () => (
  <div className="app">
    <Container>
      <Grid size={20} />
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
    </Container>
  </div>
);

export default App;
