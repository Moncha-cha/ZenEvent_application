import React from 'react';
import './styles/main.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import EventLink from './components/EventLink';
import Logo from './components/Logo';
import Navigation from './components/HeaderText';
import Header from './components/Header';



function App() {


  return (
   <>
  <Header/> {/* Obsahuje <Logo/> a <Navigation/> */}




    <nav className='navbar navbar-expand-lg bg-light'>

      <button 
      className='navbar-toggler ms-auto'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#navbarNav'
      aria-controls='navbarNav'
      aria-expanded='false'
      aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarNav'>

        <ul className='navbar-nav custom-nav'>
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='#udalosti'>Události</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#navod'>Návod</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#tipy'>Tipy</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#ome'>O mě</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#kontakt'>Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>



  
      <EventLink />
      <MainContent />
      <ContactForm />
      <Footer />
  
   </>
  );
}

export default App;