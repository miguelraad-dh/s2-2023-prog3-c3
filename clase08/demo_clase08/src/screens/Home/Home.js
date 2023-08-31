import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <h1>Home</h1>
      <p>Descripcion de la home</p>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
