import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import { capitalize } from '../../../utils';

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

const CoutriesDropdown = ({ selectedCountry, setSelectedCountry, countriesList }) => {
  const [options, setOptions] = useState(null);
  useEffect(() => {
    const optionsArr = [];
    countriesList.forEach((country) =>
      optionsArr.push({ value: country.Slug, label: country.Country })
    );
    setOptions(optionsArr);
  }, []);
  
  return (
    options && (
      <Select
        defaultValue={{value: selectedCountry, label: capitalize(selectedCountry)}}
        styles={customStyles}
        options={options}
        onChange={(selected) => setSelectedCountry(selected.value)}
      />
    )
  );
};

const SelectContainer = styled(Select)`
  flex: 1;
`;

export default CoutriesDropdown;
