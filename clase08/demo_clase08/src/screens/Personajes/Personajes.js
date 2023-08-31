import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Characters from "../../components/Characters/Characters";

const Personajes = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Characters />
      <Footer />
    </React.Fragment>
  );
};

export default Personajes;
