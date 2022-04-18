import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';
// import useFilters from '../hooks/useFilters';

function FilterByNumberValues() {
  const {
    numericFilters,
    setNumericFilters,
    setFilterByNumericValues,
  } = useContext(planetsContext);

  // const [handleChange, handleClick] = useFilters();

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilters({ ...numericFilters, [name]: value });
  };

  const handleClick = () => {
    setFilterByNumericValues([{
      column: numericFilters.column,
      comparison: numericFilters.comparison,
      value: numericFilters.value,
    }]);
  };

  return (
    <>
      <label htmlFor="column">
        Column
        <select
          data-testid="column-filter"
          name="column"
          onChange={ (event) => handleChange(event) }
          value={ numericFilters.column }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={ (event) => handleChange(event) }
          value={ numericFilters.comparison }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        Value
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          value={ numericFilters.value }
          onChange={ (event) => handleChange(event) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filter
      </button>
    </>
  );
}

export default FilterByNumberValues;