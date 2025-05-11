import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/trip-with-friends" element={<TripPage />} />
          <Route path="/class-reunion" element={<ClassPage />} />
          <Route path="/family-event" element={<FamilyPage />} />
          <Route path="/custom-event" element={<CustomEventPage />} />

          <Route path="/template-page" element={<PageTemplate />} />
        </Routes>
      </Router>
    
  )
  // return  <PageTemplate />
  // return <TripPage />
  //  return <CustomEventPage />
  // return <ClassPage />
  // return <FamilyPage />
  // return <MainPage />
}

export default App;