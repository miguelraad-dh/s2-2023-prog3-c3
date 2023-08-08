import React from 'react'
import "./FichasContainer.css";
import Ficha from './Ficha/Ficha';
function FichasContainer() {
  return (
    <section class="top-data">
      {/* Envíale props diferentes a cada ficha para hacerlo dinámico */}
      <Ficha/>
      <Ficha/>
      <Ficha/>
    </section>
  )
}

export default FichasContainer