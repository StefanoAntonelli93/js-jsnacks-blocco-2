'use strict';

console.log('snack-c');


// - creo una funzione stampa(array) 
function stampa(array) {
    // - definisco variabile per creare una stringa vuota (empty)
    let empty = "";
    
    // - creo ciclo FOR finchè index sarà minore della lunghezza dell'array aggiungo un elemento dell'array alla variabile
    for (let i = 0; i < array.length; i++){
         empty += array[i];
        // - SE index è minore della lunghezza array - ultimo elemento allora aggiungo "," alla stringa empty
         if (i < array.length - 1) {
            empty += ",";
         }
    }
    // - ritorno variabile empty
    return empty;
    

}
// - creo array (myArray)
const myArray = ['cane', 'gatto', 'topo', ' pollo'];
// - stampo in console INVOCANDO funzione il risultato della variabile empty
console.log(stampa(myArray));




