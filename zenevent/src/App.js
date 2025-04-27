import React from 'react';
import './styles/main.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import EventLink from './components/EventLink';



function App() {


  return (
   <>
    <div className="container-fluid header-logo-container">
    <img src="./Logo_zenEvent.png" className="logo-img" alt="ZenEvent Logo"/>
    </div>

    <h1 className='headers-font mt-4'>ZenEvent</h1>
    <small className='text-body-secondary headers-font'>
      Místo, kde si v klidu vytvoříte vlastní událost
    </small>




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