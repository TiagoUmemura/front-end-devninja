import React from 'react';
import './App.css';
import Home from './screens/home';
import Service from './screens/service';
import MenuBar from './components/menu-bar';

function App() {
  return (
    <>
    <MenuBar/>
    <Home />
    <Service></Service>
    </>
  );
}

export default App;
