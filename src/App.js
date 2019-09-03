import React from 'react';
import './App.css';
import Home from './screens/home';
import Service from './screens/service';
import MenuBar from './components/menu-bar';
import ProcessDevelopment from './screens/process-development';
import BannerProcessDevelopment from './screens/banner-process-development';
import Customers from './screens/customers';
import YourProject from './screens/your-project';
import BannerTalkToUs from './screens/banner-talk-to-us';

function App() {
  return (
    <>
      <MenuBar />
      <Home />
      <Service />
      <ProcessDevelopment />
      <BannerProcessDevelopment />
      <Customers />
      <YourProject />
      <BannerTalkToUs />
    </>
  );
}

export default App;
