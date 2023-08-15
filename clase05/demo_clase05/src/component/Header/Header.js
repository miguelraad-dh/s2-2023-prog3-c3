import React,{Component} from "react";
import "./Header.css"

class Header extends Component {
    constructor(){
        super()
        this.state = {
            modoOscuro: false,
            textoModoOscuro : "Modo Oscuro"
        }
    }

    cambiarModo(){
        if(this.state.modoOscuro === false){
            this.setState({
                modoOscuro: true,
                textoModoOscuro: "Modo Claro"
            })
        }else{
            this.setState({
                modoOscuro: false,
                textoModoOscuro: "Modo Oscuro"
            })
        }
    }

    render(){
        console.log(this.state.modoOscuro);
        return (
            <section className={this.state.modoOscuro ? "oscuro" : ""}>
                <h1>LOGO</h1>
                <ul>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                </ul>
                <button onClick={() => this.cambiarModo()}>{this.state.textoModoOscuro}</button>
            </section>
        )
    }
}

export default Header