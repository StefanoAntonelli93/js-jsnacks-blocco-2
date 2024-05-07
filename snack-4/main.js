'use strict'


console.log('ok');


const arrayVerde = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 ];
const arrayRosso = [ 1 , 2 ];

console.log(arrayRosso);
console.log(arrayVerde);




while (arrayVerde.length !== arrayRosso.length) {
    if (arrayVerde.length > arrayRosso.length) {
        arrayRosso.push((Math.floor(Math.random() * 10)));
    } else if (arrayRosso.length > arrayVerde.lenght){
        arrayVerde.push((Math.floor(Math.random() * 10)));
    }

}


console.log(arrayVerde);
console.log(arrayRosso);

