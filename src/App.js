import React from 'react';
import styled from 'styled-components';

import Summary from './components/Sumarry';

function App() {
  return (
    <AppContainer>
      <Header>COVID-19 DATA</Header>
      <Summary />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background: var(--lilac);
  height: 100vh;
  width: 100vw;
  @media (max-width: 576px) {
    padding: 0 2vw;
    width: unset;
  }
`;

const Header = styled.h1`
  color: var(--bronze);
  margin: 0 auto;
  text-align: center;
  padding-top: 2vw;
`;

export default App;
