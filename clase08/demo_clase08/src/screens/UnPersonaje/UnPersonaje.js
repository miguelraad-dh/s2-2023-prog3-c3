import React from "react";
import { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class UnPersonaje extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personaje: {},
    };
  }

  componentDidMount() {
    //BUscamos datos
    fetch(
      `https://rickandmortyapi.com/api/character/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          personaje: data,
        })
      )
      .catch();
  }

  render() {
    console.log(this.props.match.params.id);
    console.log(this.state.personaje);
    return (
      <React.Fragment>
        <Navbar />
        <img src={this.state.personaje.image} alt="y" />
        <h1>{this.state.personaje.name}</h1>
        <Footer />
      </React.Fragment>
    );
  }
}

export default UnPersonaje;
