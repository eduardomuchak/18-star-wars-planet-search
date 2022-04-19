import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([
    {
      column: 'diameter',
      comparison: 'maior que',
      value: 0,
    },
  ]);

  return (
    <PlanetsContext.Provider
      value={ {
        planetList,
        setPlanetList,

        filterByName,
        setFilterByName,

        numericFilters,
        setNumericFilters,

        filterByNumericValues,
        setFilterByNumericValues,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default PlanetsProvider;
