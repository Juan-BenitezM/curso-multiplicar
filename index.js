console.clear();
const { access } = require("fs");
const {crearArchivoTablaMultiplicar} = require("./multiplicar");
const argv = require("./yargs");



console.log(process.argv);
console.log(argv);

/*
const [, , argumento] = process.argv;
console.log(argumento)

const argumento2 = argumento.split('=')
console.log(argumento2[1]);

let numero = 100;

crearArchivoTablaMultiplicar(numero)
.then(nombreArchivo => console.log(nombreArchivo, "Creado"))
.catch(error => console.log(error, "ERROR"));
*/