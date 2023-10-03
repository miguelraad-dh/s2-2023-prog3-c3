import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class Buton extends Component {
    constructor(){
        super()
    }

    click(){
        console.log("Me Clickearon");
    }

    render(){
        return (
            <View>
                <Text>Bienvenidos</Text>
                <TouchableOpacity style={styles.boton} onPress={() => this.click()}>
                    <Text style={styles.texto} >Clickeame</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: "red",
        padding: 20,
    },
    texto: {
        color: "white"
    }
})

export default Buton