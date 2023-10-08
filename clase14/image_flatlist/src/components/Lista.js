import React, { Component } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

class Lista extends Component {
  constructor() {
    super();
    this.state = {
      listaPokemons: [],
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          listaPokemons: data.results,
        })
      )
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.listaPokemons);
    return (
      <View>
        {this.state.listaPokemons.length > 0 ? (
          <FlatList
            data={this.state.listaPokemons}
            keyExtractor={(pokemon) => pokemon.name.toString()}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        ) : (
          <ActivityIndicator size="large" color="purple" />
        )}
      </View>
    );
  }
}

export default Lista;
