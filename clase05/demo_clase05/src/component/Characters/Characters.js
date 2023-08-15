import React from "react";
import Character from '../Character/Character'
function Characters(){
    const heroes = [
        {
            name: 'Hulk',
            description: 'Este Hulk es tremendamente verde'
        },
        {
            name: 'Iron Man',
            description: 'Este ironman mark 47 esta tremendo'
        }
    ]
    return(
        <div className="container">
            {
                heroes.map((heroe, idx) => <Character key={heroe.name + idx} nombre={heroe.name} description={heroe.description}/>)
            }
        </div>
    )
}

export default Characters;