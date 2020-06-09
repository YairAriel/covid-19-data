import React from 'react';
import styled from 'styled-components';
import { RoughNotation } from 'react-rough-notation';

const Card = ({ cardTitle, children, delay }) => (
  <Wrapper>
    <Title>{cardTitle}</Title>
    <RoughNotation type="underline" animationDelay={delay} show={true}>
      <Content>{children}</Content>
    </RoughNotation>
  </Wrapper>
);

const Wrapper = styled.div`
  display: inline-block;
  padding: 0 20px;
  margin: 20px 0;
  color: var(--lilac);
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:nth-of-type(4)) {
    border-right: 3px solid var(--lilac);
  }
  @media (max-width: 576px) {
    background: var(--bronze);
    padding: 15px;
    margin: 0;
    &:not(:nth-of-type(4)) {
      border: none;
    }
  }
`;

const Title = styled.h3`
  letter-spacing: 0.7px;
  font-size: 22px;
  margin: 0 0 10px;
`;

const Content = styled.p`
  font-size: 18px;
  margin: 0;
`;

export default Card;
