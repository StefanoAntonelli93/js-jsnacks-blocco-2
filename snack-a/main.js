'use strict'

console.log('ok');

// - creo una funzione contaElementi dove definisco che il parametro da richiamare sia la lunghezza dell'array
function contaElementi(array) {
    return array.length;
}

// - definisco una variabile Array e gli assegno degli elementi (myArray)

const myArray = ['cane', 'gatto', 'topo', 'pappagallo', 'pulcino'];
console.log(myArray);

// - definisco una variabile per il numero degli elementi (numeroElementi) e invoco al suo interno la funzione da richiamare

const numeroElementi = contaElementi(myArray);

// - stampo in console il risultato

console.log('il numero di elementi nell\'array è:',numeroElementi);


