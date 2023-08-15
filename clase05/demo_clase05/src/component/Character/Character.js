import React, {Component} from 'react'

class Character extends Component {
    constructor(props){
        super(props)
        this.state = {
            texto: 'Ver mas'
        }
    }

    metodoVerMas(){
        if(this.state.texto === 'Ver mas'){
            this.setState({
                texto: 'Ver menos'
            })
        } else{
            this.setState({
                texto: 'Ver mas'
            })
        }
    }
    
    render(){
        return (
            <article className='card'>
                <img/>
                {console.log(this.props)}
                <h4>{this.props.nombre}</h4>
                {this.state.texto === 'Ver mas' ?  false : <p>{this.props.description}</p>}
                <a onClick={() => this.metodoVerMas()}>{this.state.texto}</a>
            </article>
        )
    }
    
}

export default Character