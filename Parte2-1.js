var arreglo = ["hola", "mundo", "como", "estas"];
console.log(obtenerLongitudes(arreglo));

function obtenerLongitudes(arreglo) {
  var longitudes = arreglo.map(function(elemento) {
    return elemento.length;
  });
  return longitudes;
}
