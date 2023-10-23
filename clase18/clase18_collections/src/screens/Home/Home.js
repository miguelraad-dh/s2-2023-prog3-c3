import react, { Component } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatList 
} from "react-native";

import { auth, db } from "../../firebase/config";



class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }



  logout() {
    auth.signOut();
    this.props.navigation.navigate("Login");
  }

  render() {
    console.log(this.state.users);
    return (
      <View>
        <Text>HOME</Text>
        <Text>Lista de usuarios</Text>

        <TouchableOpacity onPress={() => this.logout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
