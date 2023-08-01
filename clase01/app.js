// Tipos de variables

// No se recomienda.
// var nombre = "José"

// let apellido = "Gonzales"

// const edad = 28

// Tipos de dato

// string
let nombre = "José"

// number
let edad = 28

// boolean
let casado = false

// undefined
let auto; // <-- Su valor es undefined

// null
let mascotas = null

// Array
let hijos = ["José Jr.", "Marianita", "Claudia"]
console.log(hijos[0]) // <-- Para acceder a los elementos del array, utilizámos el índice

// Objeto literal
let persona = {
    nombre: "José",
    apellido: "Gonzales",
    edad: 28,
    casado: false,
    hijos: ["José Jr.", "Marianita", "Claudia"],
    saludar: function () {
        return "Hola mi nombre es " + persona.nombre
    }
}
console.log(persona.nombre) // <-- Para acceder a las propiedades de un objeto, utilizamos el punto y el nombre de la propiedad
console.log(persona.saludar()) // <-- Para acceder y EJECUTAR un método, utilizamos el nombre del objeto, su método y los paréntesis () para ejecutar

// ¿Qué pasa si tengo un objeto dentro de otro objeto?
let persona2 = {
    nombre: "Mariano",
    apellido: "Rodriguez",
    edad: 28,
    casado: false,
    hijos: ["José Jr.", "Marianita", "Claudia"],
    saludar: function () {
        return "Hola mi nombre es " + persona.nombre
    },
    mascotas: [ // <-- En este caso tenemos un array de OBJETOS dentro de un objeto
        {
            tipo: "perro",
            nombre: "Firulais",
            ladrar: function () {
                return "Guaf guaf"
            }
        },
        {
            tipo: "gato",
            nombre: "Michi",
            maullar: function () {
                return "Meow"
            }
        }
    ]
}
console.log(persona2.mascotas[0].ladrar())
console.log(persona2.mascotas[1].nombre)

// SCOPE o ALCANCE de una Variable:
let colorAzul = "azul" // <-- Esta variable es de SCOPE global porque está en la raíz del archivo


function mostrarColores(){
    console.log(colorAzul) // <-- Se muestra porque colorAzul tiene un SCOPE Global
    let colorVerde = "verde" // <-- colorVerde es declarada DENTRO de una función es decir que su SCOPE o alcance no llega por fuera de la función
    console.log(colorVerde)

}
// console.log(colorVerde) // <-- Acá, colorVerde no existe