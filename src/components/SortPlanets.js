import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function SortPlanets() {
  const { order, setOrder, filteredPlanetList,
    setFilteredPlanetList } = useContext(planetsContext);
  const sortOptions = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const handleChange = ({ target: { name, value } }) => {
    setOrder({ ...order, [name]: value });
  };

  const selectSort = ({ target: { value } }) => {
    setOrder({ ...order, sort: value });
  };

  const sortPlanets = () => {
    const { sort, column } = order;
    const planetsWithUnknownValues = [...filteredPlanetList
      .filter((planet) => planet[column] === 'unknown')];
    const sortedPlanets = [...filteredPlanetList
      .filter((planet) => planet[column] !== 'unknown')].sort((a, b) => {
      if (sort === 'ASC') {
        return a[column] - b[column];
      }
      return b[column] - a[column];
    });
    const sortedPlanetsWithUnknownValues = [...sortedPlanets,
      ...planetsWithUnknownValues];
    setFilteredPlanetList(sortedPlanetsWithUnknownValues);
  };

  return (
    <>
      <label htmlFor="column">
        Sort by
        <select
          data-testid="column-sort"
          name="column"
          onChange={ (event) => handleChange(event) }
          value={ order.column }
        >
          {sortOptions.map((column, index) => (
            <option key={ index } value={ column }>{column}</option>))}
        </select>
      </label>
      <label htmlFor="ASC">
        <input
          id="ASC"
          type="radio"
          name="order"
          value="ASC"
          onChange={ (event) => selectSort(event) }
          data-testid="column-sort-input-asc"
        />
        Ascendent
      </label>
      <label htmlFor="DESC">
        <input
          id="DESC"
          name="order"
          type="radio"
          value="DESC"
          onChange={ (event) => selectSort(event) }
          data-testid="column-sort-input-desc"
        />
        Descendent
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => sortPlanets() }
      >
        Sort
      </button>
    </>
  );
}

export default SortPlanets;
