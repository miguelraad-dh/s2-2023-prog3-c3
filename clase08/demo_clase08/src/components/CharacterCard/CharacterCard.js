import React, { Component } from "react";
import "./CharacterCard.css";
import { Link } from "react-router-dom";

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFavoritos: "Agregar a favoritos",
    };
  }

  componentDidMount() {
    let personajesTraidos = localStorage.getItem("personaje");
    if (personajesTraidos === null) {
      this.setState({
        textoFavoritos: "Agregar a favoritos",
      });
    } else if (personajesTraidos.includes(this.props.datosPersonaje.id)) {
      this.setState({
        textoFavoritos: "Quitar de favoritos",
      });
    }
  }

  agregarQuitarFavoritos() {
    let arrayPersonajes = [this.props.datosPersonaje.id];
    let personajesTraidos = localStorage.getItem("personaje");
    let personajesFinales = "";

    if (personajesTraidos === null) {
      personajesTraidos = [];
      personajesFinales = JSON.stringify(arrayPersonajes);
      this.setState({
        textoFavoritos: "Quitar de favoritos",
      });
    }

    let arrayPersonajesFinales = "";

    if (personajesTraidos.length !== 0) {
      let arrayPersonajesTraidos = JSON.parse(personajesTraidos);
      arrayPersonajesFinales = arrayPersonajesTraidos.concat(arrayPersonajes);
      personajesFinales = JSON.stringify(arrayPersonajesFinales);
      this.setState({
        textoFavoritos: "Quitar de favoritos",
      });
    }

    if (personajesTraidos.includes(this.props.datosPersonaje.id)) {
      let arrayPersonajesTraidos = JSON.parse(personajesTraidos);
      arrayPersonajesFinales = arrayPersonajesTraidos.filter(
        (item) => item !== this.props.datosPersonaje.id
      );
      personajesFinales = JSON.stringify(arrayPersonajesFinales);
      this.setState({
        textoFavoritos: "Agregar a favoritos",
      });
    }

    localStorage.setItem("personaje", personajesFinales);
  }

  render() {
    return (
      <article className="character-card">
        <Link to={`/personajes/${this.props.datosPersonaje.id}`}>
          <img src={this.props.datosPersonaje.image} alt="" />
        </Link>
        <h2>{this.props.datosPersonaje.name}</h2>
        {/* Nombre */}
        <p>{this.props.datosPersonaje.status}</p> {/* Estado */}
        <p>{this.props.datosPersonaje.species}</p> {/* Especie */}
        <p className="more">Ver más</p>
        <section className="extra">
          <p>Origen: {this.props.datosPersonaje.origin.name}</p>
        </section>
        <p
          className="delete"
          onClick={() => this.props.borrar(this.props.datosPersonaje.id)}
        >
          Borrar
        </p>
        <button onClick={() => this.agregarQuitarFavoritos()}>
          {this.state.textoFavoritos}
        </button>
      </article>
    );
  }
}

export default CharacterCard;
