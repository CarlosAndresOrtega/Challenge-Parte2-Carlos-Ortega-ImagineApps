var arreglo = [1, 3, 5, 7, 9];
var numero = 5;
console.log("Posicion del numero "+encontrarNumero(arreglo, numero));

function encontrarNumero(arreglo, numero) {
    var indice = arreglo.indexOf(numero);
    return indice;
}

