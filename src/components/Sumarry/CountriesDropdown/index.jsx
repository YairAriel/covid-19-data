import React from 'react'

const options = [
  { value: 'israel', label: 'Israel' },
  { value: 'spain', label: 'Spain' },
  { value: 'italy', label: 'Italy' }
]

const CoutriesDropdown = ({ setSelectedCountry }) => (
  <select onChange={(e) => setSelectedCountry(e.target.value)}>
    {options.map((country) => <option value={country.value} key={country.value}>{country.label}</option>)}
  </select>
);

export default CoutriesDropdown;
