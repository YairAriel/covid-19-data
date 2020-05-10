import React from 'react';
import styled from 'styled-components';

const Card = ({cardTitle, children}) => (
  <Wrapper>
    <h3>{cardTitle}</h3>
    <div>
      {children}
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  display: inline-block;
  box-shadow: 0 2px 3px #ccc;
  padding: 0 20px 20px;
`;

export default Card;
