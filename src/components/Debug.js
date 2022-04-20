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
    name: 'Alderaan',
    population: '2000000000',
    diameter: '12500',
  },
  {
    name: 'Yavin IV',
    population: '1000',
    diameter: '10200',
  },
  {
    name: 'Hoth',
    population: 'unknown',
    diameter: '7200',
  },
];

const comparisonValues = (comparisonOperator, planetColumnValue, filterValue) => {
  if (comparisonOperator === 'maior que') return planetColumnValue > filterValue;
  if (comparisonOperator === 'menor que') return planetColumnValue < filterValue;
  if (comparisonOperator === 'igual a') return planetColumnValue === filterValue;
};

// const filteredPlanets = () => planetList.filter((planet) => comparisonValues(
//   filterByNumericValues[0].comparison,
//   Number(planet[filterByNumericValues[0].column]),
//   Number(filterByNumericValues[0].value),
// ));

// const teste = filterByNumericValues.forEach((filter) => planetList
//   .filter((planet) => console.log('TESTE', filter, planet, '----------------')));

const forEach = filterByNumericValues.forEach((_filter, index) => planetList
  .filter((planet) => comparisonValues(
    console.log('Operador selecionado:',
      filterByNumericValues[index].comparison),

    console.log('Valor coluna do planeta:',
      Number(planet[filterByNumericValues[index].column])),

    console.log('Valor input pessoa usuária:',
      Number(filterByNumericValues[index].value)),
  )));

// for (const filter of filterByNumericValues) {
//   planetList.filter((planet) => comparisonValues(
//     filter.comparison,
//     Number(planet[filter.column]),
//     Number(filter.value),
//   ));
// }

// console.log(forEach);
