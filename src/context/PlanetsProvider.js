import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetList, setPlanetList] = useState([]);
  const [filteredPlanetList, setFilteredPlanetList] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [numericFilters, setNumericFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [columnFilters, setColumnFilters] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);

  const filterPlanets = () => {
    if (filterByNumericValues) {
      filterByNumericValues.forEach(({ comparison, column, value }) => {
        if (comparison === 'maior que') {
          const filteredPlanets = filteredPlanetList
            .filter((planet) => Number(planet[column]) > Number(value));
          setFilteredPlanetList(filteredPlanets);
        }
        if (comparison === 'menor que') {
          const filteredPlanets = filteredPlanetList
            .filter((planet) => Number(planet[column]) < Number(value));
          setFilteredPlanetList(filteredPlanets);
        }
        if (comparison === 'igual a') {
          const filteredPlanets = filteredPlanetList
            .filter((planet) => Number(planet[column]) === Number(value));
          setFilteredPlanetList(filteredPlanets);
        }
      });
    }
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
    filterPlanets,
    filteredPlanetList,
    setFilteredPlanetList,
    columnFilters,
    setColumnFilters,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default PlanetsProvider;
