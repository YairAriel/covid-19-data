import React from 'react';
import styled from 'styled-components';

const Card = ({cardTitle, children}) => (
  <Wrapper>
    <Title>{cardTitle}</Title>
    <Content>
      {children}
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  display: inline-block;
  padding: 0 20px;
  margin: 20px 0;
  color: #d9cfcf;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:nth-of-type(4)) {
    border-right: 3px solid #d9cfcf;
  }
`;

const Title = styled.h3`
  letter-spacing: 0.7px;
  font-size: 22px;
  margin: 15px 0;
`;

const Content = styled.p`
  font-size: 18px;
  margin: 0;
`;

export default Card;
