import React from 'react';
import styled from 'styled-components';

import Summary from './components/Sumarry';

function App() {
  return (
    <AppContainer>
      <Summary />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background: #d9cfcf;
  height: 100vh;
  width: 100vw;
  @media (max-width: 576px) {
    padding: 0 2vw;
    width: unset;
  }
`;

export default App;
