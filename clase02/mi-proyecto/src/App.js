function App() {
  let personas = [
    { nombre: "Lucas", edad: 28 },
    { nombre: "Jose", edad: 15 },
    { nombre: "Alejandro", edad: 32 },
    { nombre: "Martin", edad: 17 }
  ]

  let filtroMayores = personas.filter((pepe) => {
    return pepe.edad > 18
  })

  return (
    <ul>
      <li>--------------------------</li>
      <li>Todas las personas</li>
      <li>--------------------------</li>
      {
        personas.map(function (pepe) {
          return <li>{pepe.nombre}</li>
        })
      }
      <li>--------------------------</li>
      <li>Mayores de edad</li>
      <li>--------------------------</li>
      {
        personas.map((persona) => {
          return persona.edad > 18 ? <li>{persona.edad}</li> : false
        })
      }
    </ul>
  );
}

export default App;