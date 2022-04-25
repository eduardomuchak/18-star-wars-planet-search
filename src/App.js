import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import FilterByNumberValues from './components/FilterByNumberValues';
import SortPlanets from './components/SortPlanets';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <FilterByName />
      <div>
        <FilterByNumberValues />
        <SortPlanets />
      </div>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
