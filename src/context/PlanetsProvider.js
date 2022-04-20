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

  const filterPlanets = () => {
    if (filterByNumericValues.length === 0) {
      const filteredPlanets = planetList.filter((planet) => planet.name.toLowerCase()
        .includes(filterByName.toLowerCase()));
      setFilteredPlanetList(filteredPlanets);
    } else {
      filterByNumericValues.forEach(({ comparison, column, value }) => {
        if (comparison === 'maior que') {
          const filteredPlanets = filteredPlanetList
            .filter((planet) => planet.name.toLowerCase()
              .includes(filterByName.toLowerCase())
              && Number(planet[column]) > Number(value));
          setFilteredPlanetList(filteredPlanets);
        }
        if (comparison === 'menor que') {
          const filteredPlanets = filteredPlanetList
            .filter((planet) => planet.name.toLowerCase()
              .includes(filterByName.toLowerCase())
              && Number(planet[column]) < Number(value));
          setFilteredPlanetList(filteredPlanets);
        }
        if (comparison === 'igual a') {
          const filteredPlanets = filteredPlanetList
            .filter((planet) => planet.name.toLowerCase()
              .includes(filterByName.toLowerCase())
              && Number(planet[column]) === Number(value));
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
