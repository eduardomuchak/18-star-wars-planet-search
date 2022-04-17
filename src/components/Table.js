import React, { useContext, useState } from 'react';
import planetsContext from '../context/PlanetsContext';

function Table() {
  const { planetList } = useContext(planetsContext);

  const [filterByName, setFilterByName] = useState('');

  return (
    <>
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
      <label>
        Column
        <select data-testid='column-filter'>
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label>
        Comparison
        <select data-testid='comparison-filter'>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label>
        Value
        <input type="number" data-testid='value-filter' />
      </label>
      <button
          type="button"
          data-testid='button-filter'
        >
          Filter
        </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            planetList ? (
              // Referência para o filtro por nome do planeta:
              // https://www.youtube.com/watch?v=mZvKPtH9Fzo&ab_channel=PedroTech
              planetList.filter((planets) => {
                let result = '';
                if (filterByName === '') {
                  result = planets;
                } if (planets.name.toLowerCase().includes(filterByName.toLowerCase())) {
                  result = planets;
                } return result;
              }).map((planet, index) => (
                <tr key={ index }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>
              ))
            ) : null
          }
        </tbody>
      </table>
    </>
  );
}

export default Table;
