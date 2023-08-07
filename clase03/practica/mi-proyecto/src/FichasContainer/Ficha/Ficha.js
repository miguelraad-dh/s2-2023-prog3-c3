import React from 'react'

function Ficha() {
  // Recibe las props e intégralas en el JSX
  return (
    <article class="data-detail">
      <div class="card-content">
        <h4>título de ficha</h4>
        <p>datos de ficha</p>
      </div>
      <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
    </article>
  )
}

export default Ficha