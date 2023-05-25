saludo("Hola")("Mundo"); 

function saludo(saludoInicial) {
    return function(nombre) {
      console.log(saludoInicial + " " + nombre);
    }
}
  