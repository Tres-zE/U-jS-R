let peliculaTitulo = "Avengers";
const peliculaPrecio = 20;

function setTitulo() {
  let peliculaTitulo = "Terminator 2";
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
  console.log("El precio de la pelicula es: " + moviePrecio);
  //concatenacion con ES6
  console.log(`El precio de la pelicula es: ${moviePrecio}`);
}
//llamamos a la funcion para que nos muestre en la consola
mostrarPrecio();

//ARROW FUNCTION
let peliPrecio = 70;

const precio = () => console.log(`El precio de la pelicula es: ${peliPrecio}`);

precio();
