import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import api from '../../api';
import Card from './Card';
import Spinner from '../common/Spinner';

const Summary = () => {
  const [liveData, setLiveData] = useState(null);
  const [mostUpdated, setMostUpdated] = useState(null);

  useEffect(() => {
    api.get('dayone/country/israel').then((res) => {
      setLiveData(res.data);
      setMostUpdated(
        _.pick(res.data[res.data.length - 1], [
          'Date',
          'Active',
          'Confirmed',
          'Deaths',
          'Recovered',
        ])
      );
    });
  }, []);

  return mostUpdated ? (
    <Container>
      {Object.keys(mostUpdated).map((item) => (
        <Card key={item} cardTitle={item}>
          {mostUpdated[item]}
        </Card>
      ))}
    </Container>
  ) : (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
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
