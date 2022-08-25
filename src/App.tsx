// Libraries
import React, { useState } from 'react';

// CSS
import './App.css';
import Menu, { MenuProps } from './components/Menu/Menu';
import Output from './components/Output/Output';

// Components

function App() {
  // App props
  const title = 'Simple Counter'

  // State managemnet
  const [ count, setCount ] = useState(0);

  // Props
  const outputProps = {
    count: count,
  };

  const menuProps: MenuProps = {
    handleDecrement: (event) => {setCount(count - 1)},
    handleIncrement: (event) => {setCount(count + 1)},
    handleReset: (event) => {setCount(0)},
  };

  // Component
  return (
    <main className="App">
      <h1>{title.toUpperCase()}</h1>
      <Output {...outputProps} />
      <Menu {...menuProps} />
    </main>
  );
};

export default App;