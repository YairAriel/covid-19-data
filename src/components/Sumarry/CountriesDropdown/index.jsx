import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import { capitalize } from '../../../utils';

const customStyles = {
  container: () => ({
    width: '100%',
    margin: '2vw 0',
    '@media (min-width: 576px)': {
      width: '200px',
    },
  }),
  control: base => ({
    ...base,
    border: '1px solid var(--bronze)',
    borderRadius: 'none',
    boxShadow: 'none',
    background: 'var(--lilac)',
    cursor: 'pointer',
    color: 'var(--purple)',
    fontSize: '18px',
  }),
  menu: () => ({
    position: 'relative',
    top: '0',
    zIndex: 9,
  }),
  dropdownIndicator: base => ({
    ...base,
    color: 'var(--purple)',
  }),
  indicatorSeparator: base => ({
    ...base,
    background: 'var(--purple)',
  }),
};

const CoutriesDropdown = ({ selectedCountry, setSelectedCountry, countriesList }) => {
  const [options, setOptions] = useState(null);
  useEffect(() => {
    const optionsArr = [];
    countriesList.forEach((country) =>
      optionsArr.push({ value: country.Slug, label: country.Country })
    );
    optionsArr.sort((a, b) => a.value.localeCompare(b.value));
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
