import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import EventLink from "../components/EventLink";
import MainContent from "../components/MainContent";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const MainPage = () => {
  return (
        <>
          <Header /> {/* Obsahuje <Logo/> a <Navigation/> */}
          <Navigation />
          <EventLink />
    
          <main className='container'>
            <MainContent />
            <ContactForm />
          </main>
    
         
    
          <Footer />
    
          
        </>
      );
};

export default MainPage;