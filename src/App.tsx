import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter"
import Counter2 from './components/counter2';

function App() {
  return (
    <div className="App">
      <Counter
        initialValue={0}
      />
      <Counter2
        initialValue={0}
      />
    </div>
  );
}

export default App;
