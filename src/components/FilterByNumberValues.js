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
  } = useContext(planetsContext);

  const handleChange = ({ target: { name, value } }) => {
    setNumericFilters({ ...numericFilters, [name]: value });
  };

  const handleClick = () => {
    setFilterByNumericValues([...filterByNumericValues, {
      column: numericFilters.column,
      comparison: numericFilters.comparison,
      value: numericFilters.value,
      id: Math.floor(Date.now() * Math.random()),
    }]);
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
      <div>
        {filterByNumericValues.map((filter, index) => (
          <p key={ index }>
            {`${filter.column} ${filter.comparison} ${filter.value}`}
          </p>
        ))}
      </div>
    </>
  );
}

export default FilterByNumberValues;
