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
