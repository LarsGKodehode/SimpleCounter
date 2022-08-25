// Libraries
import React, {
  useState,
  useEffect,
} from 'react';

// CSS
import './App.css';

// Components
import Menu, { MenuProps } from './components/Menu/Menu';
import Output from './components/Output/Output';


function App() {
  // App props
  const title = 'Simple Counter';

  // State managemnet
  const [ count, setCount ] = useState(0);

  // Effects for fancy stuff
  useEffect(() => {
    setInterval(() => menuProps.handleIncrement(), 1000); // Probably should have extracted this function, this is however a nonsense effect, so I didn't bother
  }, []);

  // Props
  const titleStyle: React.CSSProperties = {
    textAlign: 'center',
  };

  const outputProps = {
    count: count,
  };

  const menuProps: MenuProps = {
    handleDecrement: () => {setCount(prev => prev - 1)},
    handleIncrement: () => {setCount(prev => prev + 1)},
    handleReset: () => {setCount(0)},
  };

  // Component
  return (
    <main className="App">
      <h1
       style={titleStyle}
      >
        {title.toUpperCase()}
      </h1>

      <Output {...outputProps} />
      <Menu {...menuProps} />
    </main>
  );
};

export default App;