const filterByNumericValues = [
  {
    column: 'diameter',
    comparison: 'menor que',
    value: '11000',
  },
  {
    column: 'population',
    comparison: 'maior que',
    value: '50000000',
  },
];

const planetList = [
  {
    name: 'Tatooine',
    population: '200000',
    diameter: '10465',
  },
  {
    name: '"Alderaan"',
    population: '2000000000',
    diameter: '12500',
  },
];

const comparisonValues = (comparisonOperator, planetColumn, filterValue) => {
  if (comparisonOperator === 'maior que') return planetColumn > filterValue;
  if (comparisonOperator === 'menor que') return planetColumn < filterValue;
  if (comparisonOperator === 'igual a') return planetColumn === filterValue;
};

const filteredPlanets = () => planetList.filter((planet) => comparisonValues(
  filterByNumericValues[0].comparison,
  Number(planet[filterByNumericValues[0].column]),
  Number(filterByNumericValues[0].value),
));
console.log(filteredPlanets());
