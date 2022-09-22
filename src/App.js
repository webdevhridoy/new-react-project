// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import GunData from './components/GunData/GunData';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0);
  const increaseProudct = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Header count={count}></Header>
      <GunData increaseProudct={increaseProudct}></GunData>
    </div>
  );
}

export default App;
