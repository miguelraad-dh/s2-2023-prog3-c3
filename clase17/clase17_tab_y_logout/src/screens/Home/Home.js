import react, { Component } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { auth } from "../../firebase/config";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator;

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
    return (
      <View>
        <Text>HOME</Text>
        <TouchableOpacity onPress={() => this.logout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
