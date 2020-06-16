import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const options = [
  { value: 'israel', label: 'Israel' },
  { value: 'spain', label: 'Spain' },
  { value: 'italy', label: 'Italy' },
];

const customStyles = {
  container: () => ({
    width: '100%',
    marginTop: '3vw',
    '@media (min-width: 576px)': {
      width: '200px',
    },
  }),
  menu: () => ({
    position: 'relative',
    top: '0',
    border: '1px solid var(--orange)',
  }),
};

const CoutriesDropdown = ({ setSelectedCountry }) => (
  <Select
    defaultValue={options[0]}
    styles={customStyles}
    options={options}
    onChange={(selected) => setSelectedCountry(selected.value)}
  />
);

const SelectContainer = styled(Select)`
  flex: 1;
`;

export default CoutriesDropdown;
