let peliculaTitulo = 'Avengers';
const peliculaPrecio = 20;

function setTitulo() {
  let peliculaTitulo = 'Terminator 2';
  console.log(peliculaTitulo);
  //si le cambiamos el nombre de la pelicula dentro de la misma funcion, nos dara un error
  //let peliculaTitulo = "Avengers";
}

function setPrecio() {
  const peliculaPrecio = 50;
  console.log(peliculaPrecio);
  //const peliculaPrecio = 60;
}

//llamamos a la funcion
setTitulo();
setPrecio();
console.log(peliculaTitulo);
console.log(peliculaPrecio);

//concatenacion
function mostrarPrecio() {
  let moviePrecio = 65;
  //concatenacion antes de ES6
  console.log('El precio de la pelicula es: ' + moviePrecio);
  //concatenacion con ES6
  console.log(`El precio de la pelicula es: ${moviePrecio}`);
}
//llamamos a la funcion para que nos muestre en la consola
mostrarPrecio();

//ARROW FUNCTION
let peliPrecio = 70;

const precio = () => console.log(`El precio de la pelicula es: ${peliPrecio}`);

precio();

//function map
//declaramos un array de objetos
let movies = [
  { idPelicula: 1, titulo: 'dexter' },
  { idPelicula: 2, titulo: 'rodas' },
  { idPelicula: 3, titulo: 'dora' },
];

const mostrarMovies = (movies) => {
  movies.map((p) => console.log(p.idPelicula, p.titulo));
};
//llamanos a la funcion
mostrarMovies(movies);

let frutas = [
  { nombre: 'guayaba', precio: '$15 ' },
  { nombre: 'pera', precio: '$7' },
  { nombre: 'limon', precio: '$14' },
  { nombre: 'sandia', precio: '$15' },
  { nombre: 'piña', precio: '$13' },
  { nombre: 'fresa', precio: '$11' },
];

const detalleFruta = (frutas) => {
  frutas.map((f) => console.log(f.nombre, f.precio));
};

detalleFruta(frutas);
//si ponemos el comentario de abajo, al guardar cambios, respetara las comillas
//prettier-ignore
console.log("Hola Mundo");

//<---------Esta seccion es de un curso de logica aparte---------->
/*
Ejercicio: se plantea reolver el siguiente problema que nos dice los siguiente:
se debe restar sin restar, es decir, tenemos el 5 y el 1, si restamos nos daria la cantidad de 4, el objetivo es que nos de el resultado de 4 sin ulizar la resta
*/
function subAlg(a, b) {
  let value = 0;
  while (a > b) {
    b++;
    value++;
  }
  return value;
}

subAlg(5, 1);
console.log(subAlg);

/*
Explicacion del codigo:
Declaración de la función: function subAlg(a, b) { ... }

Esta función se llama subAlg y toma dos parámetros, a y b.

Inicialización de la variable: let value = 0;

Se declara una variable value y se inicializa en 0.

Bucle while: while (a > b) { ... }

Este bucle se ejecuta mientras a sea mayor que b.

Incremento de b y value dentro del bucle:

b++ incrementa b en 1.

value++ incrementa value en 1.

Retorno del valor: return value;

Cuando el bucle termina (es decir, cuando a ya no es mayor que b), la función devuelve el valor de value.

Ejemplo con subAlg(5, 1):

Inicialmente, a es 5 y b es 1.

En cada iteración del bucle, b se incrementa en 1 y value también se incrementa en 1.

El bucle se ejecuta hasta que b sea igual a 5.

Al final, value será 4, porque el bucle se ejecutó 4 veces (1 -> 2 -> 3 -> 4 -> 5).

Por lo tanto, subAlg(5, 1) devolverá 4. 🚀
*/
