'use strict';


// - creo un array
// - creo una funzione rimuoviDallaCoda()
// - definisco in una variabile un nuovo array vuoto (arrayB)
// - creo un ciclo FOR finchè index è minore della lunghezza di array - ultimo elemento allora in arrayB pusho elemento array
// - ritorno arrayB

// - creo la variabile arrayB e al suo interno INVOCO la funzione rimuoviDallaCoda()

// - stampo il risultato in console
    

const arrayA= [1, 2, 3, 4, 5, 6, 7, 8];
console.log('il primo array contiene:', arrayA);


function rimuoviDallaCoda(array){
    let arrayB = [];
    for (let i = 0; i < array.length -1; i++){
        arrayB.push(array[i]);
    } return arrayB;
}

const arrayB = rimuoviDallaCoda(arrayA);
console.log('il secondo array contiene:', arrayB);

