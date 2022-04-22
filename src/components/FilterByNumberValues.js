import React, { useContext, useEffect } from 'react';
import planetsContext from '../context/PlanetsContext';

function FilterByNumberValues() {
  const {
    numericFilters,
    setNumericFilters,
    setFilterByNumericValues,
    filterByNumericValues,
    columnFilters,
    setColumnFilters,
    setFilteredPlanetList,
    planetList,
    filteredPlanetList,
  } = useContext(planetsContext);

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilters({ ...numericFilters, [name]: value });
    setFilteredPlanetList(filteredPlanetList);
  };

  const handleClick = () => {
    setFilterByNumericValues([...filterByNumericValues, {
      column: numericFilters.column,
      comparison: numericFilters.comparison,
      value: numericFilters.value,
      id: Math.floor(Date.now() * Math.random()),
    }]);
  };

  const removeFilter = (id) => {
    const refreshFilters = filterByNumericValues.filter((filter) => filter.id !== id);
    setFilteredPlanetList(planetList);
    setFilterByNumericValues(refreshFilters);
  };

  const removeAllFilters = () => {
    const initialColumnFilters = ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    setFilteredPlanetList(planetList);
    setFilterByNumericValues([]);
    setColumnFilters(initialColumnFilters);
  };

  useEffect(() => {
    if (filterByNumericValues) {
      const savedFiltersColumns = filterByNumericValues.map(({ column }) => column);
      const newFilters = columnFilters
        .filter((column) => !savedFiltersColumns.includes(column));
      setColumnFilters(newFilters);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  useEffect(() => {
    setNumericFilters({
      column: columnFilters[0],
      comparison: 'maior que',
      value: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnFilters]);

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
          {columnFilters.map((column, index) => (
            <option key={ index } value={ column }>{column}</option>))}
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
          min="0"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick() }
      >
        Filter
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => removeAllFilters() }
      >
        Remove All Filters
      </button>
      <div>
        {filterByNumericValues.map((filter) => (
          <div
            key={ filter.id }
            data-testid="filter"
          >
            <span>
              {`${filter.column} ${filter.comparison}: ${filter.value}`}
            </span>
            <button
              type="button"
              onClick={ () => removeFilter(filter.id) }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default FilterByNumberValues;
