import React, { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

function Table() {
  const { planetList, filterByName, filterByNumericValues } = useContext(planetsContext);

  // console.log(planetList);
  // console.log(filterByNumericValues);

  const comparisonValues = (comparisonOperator, planetColumn, filterValue) => {
    if (comparisonOperator === 'maior que') return planetColumn > filterValue;
    if (comparisonOperator === 'menor que') return planetColumn < filterValue;
    if (comparisonOperator === 'igual a') return planetColumn === filterValue;
  };

  return (
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
              let searchResult = '';
              if (filterByName === '') {
                searchResult = planets;
              } if (planets.name.toLowerCase().includes(filterByName.toLowerCase())) {
                searchResult = planets;
              } return searchResult;
            })
              .filter((planet) => comparisonValues(
                filterByNumericValues[0].comparison,
                Number(planet[filterByNumericValues[0].column]),
                Number(filterByNumericValues[0].value),
              ))
              .map((planet, index) => (
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
  );
}

export default Table;
