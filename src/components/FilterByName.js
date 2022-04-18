import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function FilterByName() {
  const { filterByName, setFilterByName } = useContext(planetsContext);

  return (
    <label htmlFor="planetName">
      Planet Name:
      <input
        data-testid="name-filter"
        type="text"
        name="planetName"
        value={ filterByName }
        onChange={ (event) => setFilterByName(event.target.value) }
      />
    </label>
  );
}

export default FilterByName;
