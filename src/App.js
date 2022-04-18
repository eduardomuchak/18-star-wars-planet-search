import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import FilterByNumberValues from './components/FilterByNumberValues';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <FilterByName />
      <FilterByNumberValues />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
