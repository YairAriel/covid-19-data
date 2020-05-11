import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import api from '../../api';
import Card from './Card';

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
    </Container>) : <p>Loading...</p>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Summary;
