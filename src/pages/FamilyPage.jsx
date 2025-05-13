import React from "react";
import PageTemplate from "./PageTemplate";
import Footer from "../components/Footer";


const FamilyPage = () => {
    
  return (
    <>
      <PageTemplate
        imageUrl={"./family.jpg"} 
        eventTitle={"Rodinná oslava"}
      />
      <Footer />
    </>
  );
};

export default FamilyPage;