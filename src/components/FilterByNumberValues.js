import React from 'react';

function FilterByNumberValues() {
  return (
    <>
      <label htmlFor="column">
        Column
        <select data-testid="column-filter" name="column">
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison">
        Comparison
        <select data-testid="comparison-filter" name="comparison">
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        Value
        <input type="number" data-testid="value-filter" name="value" />
      </label>
      <button
        type="button"
        data-testid="button-filter"
      >
        Filter
      </button>
    </>
  );
}

export default FilterByNumberValues;
