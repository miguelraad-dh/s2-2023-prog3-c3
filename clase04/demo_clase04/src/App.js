import React from "react";
import Card from "./component/Card/Card";

function App() {
  let movies = [
    {
      nombre: "Jurassic Park",
      director: "Steven Spielberg",
      year: "1993",
      img: "./img/jurassicpark.jpg",
    },
    {
      nombre: "Aliens",
      director: "James Cameron",
      year: "1986",
      img: "./img/aliens.jpg",
    },
    {
      nombre: "Star Wars",
      director: "George Lucas",
      year: "1977",
      img: "./img/starwars.jpg",
    },
  ];
  return (
    <React.Fragment>
      <section>
        {movies.map((pelicula, idx) => {
          return <Card key={pelicula.nombre + idx} info={pelicula} />;
        })}
      </section>
    </React.Fragment>
  );
}

export default App;
