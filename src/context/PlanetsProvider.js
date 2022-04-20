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

  const comparisonValues = (comparisonOperator, planetColumn, filterValue) => {
    if (comparisonOperator === 'maior que') return planetColumn > filterValue;
    if (comparisonOperator === 'menor que') return planetColumn < filterValue;
    if (comparisonOperator === 'igual a') return planetColumn === filterValue;
  };

  const context = {
    planetList,
    setPlanetList,
    filterByName,
    setFilterByName,
    numericFilters,
    setNumericFilters,
    filterByNumericValues,
    setFilterByNumericValues,
    comparisonValues,
  };

  return (
    <PlanetsContext.Provider
      value={ context }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default PlanetsProvider;
