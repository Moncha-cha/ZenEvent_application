import React from 'react';
import './styles/main.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import EventLink from './components/EventLink';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PageTemplate from './pages/PageTemplate';




function App() {


  return (
    <>
      <Header /> {/* Obsahuje <Logo/> a <Navigation/> */}
      <Navigation />
      <EventLink />

      <main className='container'>
        <MainContent />
        <ContactForm />
      </main>

      <PageTemplate />

      <Footer />

      

      
    </>
  );
}

export default App;