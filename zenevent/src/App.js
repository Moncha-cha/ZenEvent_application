import React from 'react';
import './styles/main.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import PageTemplate from './pages/PageTemplate';
import CustomEventPage from './pages/CustomEventPage';
import ClassPage from './pages/ClassPage';
import FamilyPage from './pages/FamilyPage';
import TripPage from './pages/TripPage';
import MainPage from './pages/MainPage';



function App() {

  // return  <PageTemplate />

   return <TripPage />

//  return <CustomEventPage />

  // return <ClassPage />

  // return <FamilyPage />

  // return <MainPage />
}  

export default App;