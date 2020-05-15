import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import api from '../../api';
import Card from './Card';
import Spinner from '../common/Spinner';

const Summary = () => {
  const [liveData, setLiveData] = useState(null);

  useEffect(() => {
    api.get('live/country/israel')
      .then(res => setLiveData(res.data));
  })

  return (
    liveData ? (<Container>
      <Card cardTitle="Card title">Card content</Card>
      <Card cardTitle="Card title">Card content</Card>
      <Card cardTitle="Card title">Card content</Card>
    </Container>) : <SpinnerContainer><Spinner /></SpinnerContainer>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Summary;
