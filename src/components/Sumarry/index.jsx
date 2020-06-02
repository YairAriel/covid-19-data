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
          'Date',
        ])
      );
    });
  }, []);

  return mostUpdated ? (
    <Container>
      <SummaryContainer>
        <DateViewer>Last Update | {moment(mostUpdated.Date).format('DD/MM/YYYY')}</DateViewer>
        <CardsContainer>
        {Object.keys(mostUpdated).map((item) => {
          if (item !== 'Date') {
            return (
              <Card key={item} cardTitle={item}>
                {mostUpdated[item].toLocaleString()}
              </Card>
            );
          }
        })}
        </CardsContainer>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 576px) {
    display: block;
  }
`;

const DateViewer = styled.div`
  background: var(--orange);
  color: var(--lilac);
  text-align: center;
  padding: 12px;
  margin-bottom: 4vw;
`

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  background: var(--bronze);
  border-radius: 20px;
  width: 580px;
  box-shadow: 2px 2px 15px;
  @media (max-width: 560px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4vw;
    width: 100%;
    background: none;
    border-radius: unset;
    box-shadow: none;
  }
`;

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Summary;
