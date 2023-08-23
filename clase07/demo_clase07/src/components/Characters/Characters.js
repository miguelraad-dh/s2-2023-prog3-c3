import React, { Component } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./Characters.css";
import Formulario from "../Formulario/Formulario";
class Characters extends Component {
  constructor() {
    super();
    this.state = {
      personajes: [], //aparecer personajes
      nextUrl: "",
    };
  }

  componentDidMount() {
    //BUscamos datos
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          personajes: data.results,
          nextUrl: data.info.next,
        })
      )
      .catch();
  }

  traerMas() {
    //Traer la siguiente página de personajes
    fetch(this.state.nextUrl)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          personajes: data.results.concat(this.state.personajes),
          nextUrl: data.info.next,
        })
      )
      .catch();
  }

  borrar(id) {
    let personajesFiltrados = this.state.personajes.filter(
      (unPersonaje) => unPersonaje.id !== id
    );
    this.setState({
      personajes: personajesFiltrados,
    });
  }

  filtrarPersonajes(textoInput) {
    let personajesFiltrados = this.state.personajes.filter((personaje) => {
      return personaje.name.toLowerCase().includes(textoInput.toLowerCase());
    });
    this.setState({
      personajes: personajesFiltrados,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Formulario filtro={(texto) => this.filtrarPersonajes(texto)} />
        <button onClick={() => this.traerMas()}> Traer más </button>
        <section className="cardContainer">
          {this.state.personajes.map((unPersonaje, idx) => (
            <CharacterCard
              key={unPersonaje.name + idx}
              datosPersonaje={unPersonaje}
              borrar={(id) => this.borrar(id)}
            />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default Characters;
