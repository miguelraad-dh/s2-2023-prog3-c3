import React from "react";
import Navbar from "./Navbar/Navbar";
import FichasContainer from "./FichasContainer/FichasContainer";
import CategoriesContainer from "./CategoriesContainer.js/CategoriesContainer";

function App() {
    return (
        
        <>
            <Navbar />
            <h1>My App in React</h1>
            <main>
                <FichasContainer />
                <h2>Categories in database</h2>
                <CategoriesContainer />
                <h2>Personajes de películas</h2>
                {/* Componente contenedor de los personajes */}
            </main>
            {/* Acá me falta el último componente de una web. ¿Cuál? */}
        </>
    )
}

export default App