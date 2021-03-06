import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import moment from 'moment';
import _ from 'lodash';

import api from '../../api';
import Card from './Card';
import Spinner from '../common/Spinner';
import CountriesDropdown from './CountriesDropdown';

const Summary = () => {
  const [liveData, setLiveData] = useState(null);
  const [mostUpdated, setMostUpdated] = useState(null);
  const [countriesList, setCountriesList] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('israel');

  useEffect(() => {
    api.get(`dayone/country/${selectedCountry}`).then((res) => {
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
    })
    .catch((e) => console.log(e));
    api.get('countries').then((res) => setCountriesList(res.data));
  }, [selectedCountry]);

  return mostUpdated && countriesList ? (
    <Container>
      <CountriesDropdown
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        countriesList={countriesList}
      />
      {!_.isEmpty(mostUpdated) ? (
      <SummaryContainer>
        <DateViewer>Last Update | {moment(mostUpdated.Date).format('DD/MM/YYYY')}</DateViewer>
        <CardsContainer>
          {Object.keys(mostUpdated).map((item, index) => {
            if (item !== 'Date') {
              return (
                <Card key={item} cardTitle={item} delay={(index + 1) * 400}>
                  {mostUpdated[item].toLocaleString()}
                </Card>
              );
            }
          })}
        </CardsContainer>
      </SummaryContainer>) : <NoData>No Data</NoData>}
    </Container>
  ) : (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

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

const NoData = styled.p`
  font-size: 36px;
  color: var(--bronze);
`;

const SpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Summary;
