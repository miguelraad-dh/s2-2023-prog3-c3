import React, { Component } from "react";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      personaje: {},
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/2")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          personaje: data,
        })
      )
      .catch((error) => console.log("El error es: " + error));
  }

  render() {
    console.log(this.state.personaje);
    return this.state.personaje === {} ? (
      <h4>Cargando...</h4>
    ) : (
      <article>
        <img src={this.state.personaje.image} alt={this.state.personaje.name} />
        <h2>{this.state.personaje.name}</h2>
      </article>
    );
  }
}

export default Card;
