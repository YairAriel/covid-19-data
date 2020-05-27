import React from 'react';
import styled from 'styled-components';

import Summary from './components/Sumarry';
import './App.css';

function App() {
  return (
    <div className="App">
      <Summary />
    </div>
  );
}

const AppContainer = styled.div`
  background: #d9cfcf;
  height: 100vh;
  width: 100vw;
`;

export default App;
