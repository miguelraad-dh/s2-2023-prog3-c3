import React, { Component } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase/config";


class Register extends Component {
    constructor(){
        super()
        this.state={
            email: '',
            password: '',
        }
    }

    register(email, pass){
        auth.createUserWithEmailAndPassword(email,pass)
        .then( res => console.log("el usuario fue creado con exito"))
        .catch( error => console.log(`ocurrio el siguiente error : ${error}`))
    }

    render(){
        return(
            <View>
                <Text>Register</Text>
                <Text>Email: </Text>
                <TextInput style={styles.input} keyboardType='email-address' placeholder="ejemplo@gmail.com" onChangeText={(text) => this.setState({email: text })} value={this.state.email}/>
                <Text>Password: </Text>
                <TextInput style={styles.input} secureTextEntry={true} keyboardType='default' onChangeText={(text) => this.setState({password: text })} value={this.state.password}/>
                <TouchableOpacity style={styles.buton} onPress={() => this.register(this.state.email, this.state.password)}>
                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        backgroundColor: "lightgrey",
        padding: 10,
        color: "grey",
    },
    text: {
        color: "white",
    },
    buton: {
        backgroundColor: 'red',
        padding: 20,
        marginTop: 10,
    },
    
})

export default Register