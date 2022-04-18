import { useContext } from 'react';
import planetsContext from '../context/PlanetsContext';

const useFilters = () => {
  const {
    columnFilter,
    comparisonFilter,
    valueFilter,
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(planetsContext);

  const handleClick = (event) => {
    event.preventDefault();
    setFilterByNumericValues([{
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    }]);
  };

  const handleChange = ({ target: { name, value } }) => {
    const filteredValues = { ...filterByNumericValues };
    filteredValues[name] = value;
    setFilterByNumericValues(filteredValues);
  };

  return [handleClick, handleChange];
};

export default useFilters;
