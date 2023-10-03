import React from "react";

function Home() {
  return (
    <React.Fragment>
      
      <h1>Home</h1>
      <p>Descripcion de la home</p>
      <h2>Mas populares</h2>
      <CardsContainer movies={responseDeMasPopulares}/>
      <h2>Mas novedosas</h2>
      <CardsContainer movies={responseDeMasNovedosas}/>
    </React.Fragment>
  );
}

export default Home;
