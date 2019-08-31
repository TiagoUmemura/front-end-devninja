import React from 'react';
import './App.css';
import Home from './screens/home';
import Service from './screens/service';
import MenuBar from './components/menu-bar';
import ProcessDevelopment from './screens/process-development';
import BannerProcessDevelopment from './screens/banner-process-development';
import Customers from './screens/customers';

function App() {
  return (
    <>
      <MenuBar/>
      <Home />
      <Service/>
      <ProcessDevelopment/>
      <BannerProcessDevelopment/>
      <Customers/>
    </>
  );
}

export default App;
