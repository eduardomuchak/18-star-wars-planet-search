import React, { useContext, useEffect } from 'react';
import planetsContext from '../context/PlanetsContext';
import getPlanetsInfo from '../services/planetsAPI';

function Table() {
  const { planetList, setPlanetList, filterByName,
    filterByNumericValues, filterPlanets,
    filteredPlanetList, setFilteredPlanetList } = useContext(planetsContext);

  // console.log(planetList);
  // console.log(filterByNumericValues);

  useEffect(() => {
    const getPlanetsWithoutResidents = async () => {
      const planets = await getPlanetsInfo();
      const planetsWithoutResidents = planets.results
        .map(({ residents, ...rest }) => rest);
      setPlanetList(planetsWithoutResidents);
      setFilteredPlanetList(planetsWithoutResidents);
    };
    getPlanetsWithoutResidents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filterPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByName, filterByNumericValues]);

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
            filteredPlanetList
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
