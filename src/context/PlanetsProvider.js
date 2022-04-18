import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import getPlanetsInfo from '../services/planetsAPI';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider({ children }) {
  const [planetList, setplanetList] = useState('');
  const [filterByName, setFilterByName] = useState('');
  // const [columnFilter, setColumnFilter] = useState('');
  // const [comparisonFilter, setComparisonFilter] = useState('');
  // const [valueFilter, setValueFilter] = useState(0);
  const [numericFilters, setNumericFilters] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const getPlanetsWithoutResidents = async () => {
      const planets = await getPlanetsInfo();
      // console.log(planets);
      const planetsWithoutResidents = planets.results
        .map(({ residents, ...rest }) => rest);
      setplanetList(planetsWithoutResidents);
    };
    getPlanetsWithoutResidents();
  }, []);

  return (
    <PlanetsContext.Provider
      value={ {
        planetList,

        filterByName,
        setFilterByName,

        // columnFilter,
        // setColumnFilter,

        // comparisonFilter,
        // setComparisonFilter,

        // valueFilter,
        // setValueFilter,

        numericFilters,
        setNumericFilters,

        filterByNumericValues,
        setFilterByNumericValues,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default PlanetsProvider;
