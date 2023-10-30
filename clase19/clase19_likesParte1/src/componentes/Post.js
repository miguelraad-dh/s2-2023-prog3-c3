import react, { Component } from 'react';
import {TextInput, TouchableOpacity, View, Text, StyleSheet, FlatList} from 'react-native';
import { auth } from '../firebase/config';


class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            like: false,
        }

        
    }

    componentDidMount(){
        //Indicar si el post ya está likeado o no
        let likes = this.props.infoPost.datos.likes

        if(likes.length === 0){
            this.setState({
                like: false
            })
        }
        if(likes.length > 0){
            likes.forEach( like => console.log(like))
        }
    }


   likear(){
    //El post tendría que guardar una propiedad like con un array de los usuario que lo likearon.
   }

   disLike(){
    //Quitar del array de likes al usario que está mirando el post.
   }
   

    render(){
        // console.log(this.props);
        return(
            <View style={styles.formContainer}>
                <Text>----------------------------------------------------</Text>
                <Text>Datos del Post</Text>
                <Text>Email: {this.props.infoPost.datos.owner}</Text>
                <Text>Texto: {this.props.infoPost.datos.post}</Text>

                {/* If ternario */}
                {this.state.like ? 
                <TouchableOpacity style={styles.button} onPress={()=>this.dislike()}>
                    <Text style={styles.textButton} >Dislike</Text>
                    
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.button} onPress={()=>this.likear()}>
                    <Text style={styles.textButton} >Like</Text>
                </TouchableOpacity>
                }
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
      paddingHorizontal: 10,
      marginTop: 20,
    },
    input: {
      height: 20,
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "#ccc",
      borderStyle: "solid",
      borderRadius: 6,
      marginVertical: 10,
    },
    button: {
      backgroundColor: "salmon",
      paddingHorizontal: 10,
      paddingVertical: 6,
      textAlign: "center",
      borderRadius: 4,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: "salmon",
      width: "30%",
    },
    textButton: {
      color: "#fff",
    },
  });



export default Post;
