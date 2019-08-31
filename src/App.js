import React from 'react';
import './App.css';
import Home from './screens/home';
import Service from './screens/service';
import MenuBar from './components/menu-bar';
import ProcessDevelopment from './screens/process-development';

function App() {
  return (
    <>
      <MenuBar/>
      <Home />
      <Service/>
      <ProcessDevelopment/>
    </>
  );
}

export default App;
