import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const Summary = () => (
  <Container>
    <Card cardTitle="Card title">Card content</Card>
    <Card cardTitle="Card title">Card content</Card>
    <Card cardTitle="Card title">Card content</Card>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default Summary;
