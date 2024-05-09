'use strict';

console.log('ok');

const arrayA= [1, 2, 3, 4, 5, 6, 7, 8];
console.log('il primo array contiene:', arrayA);


function rimuoviDallaTesta(array){
    let arrayB = [];
    const arrayLength = array.length;
    for (let i = 1; i < arrayLength ; i++){
        arrayB.push(array[i]);
    } return arrayB;
}

const arrayB = rimuoviDallaTesta(arrayA);
console.log('il secondo array contiene:', arrayB);

