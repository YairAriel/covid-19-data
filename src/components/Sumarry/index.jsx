import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
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
      <SummaryContainer>
        {Object.keys(mostUpdated).map((item) => (
          <Card key={item} cardTitle={item}>
            {/* {item === 'Date'
              ? moment(mostUpdated[item]).format('DD/MM/YYYY')
              : mostUpdated[item]} */}
            {mostUpdated[item]}
          </Card>
        ))}
      </SummaryContainer>
    </Container>
  ) : (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3vw;
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #a23419;
  border-radius: 20px;
  width: 580px;
  box-shadow: 2px 2px 15px;
`;  

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Summary;
