'use strict'

// console.log('snack-b');


//input
const myArray = [10, 20, 30];
// console.log(myArray);
// console.log(myArray[0]);


const elementoDaTrovare = 40;

// console.log(element);


// funzione
function trovaIndice(array, element) {
   for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === elementoDaTrovare) return i;
   } return -1;
}


// invocazione
const trovaPosizione = trovaIndice(myArray, elementoDaTrovare);
console.log('l\'elemento si trova in posizione:', trovaPosizione);





