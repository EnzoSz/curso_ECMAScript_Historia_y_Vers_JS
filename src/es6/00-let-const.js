// utilizando var, para reasignar un valor 
var lasname = 'Enzo';
lasname = 'Eduardo';
console.log(lasname);

// utilizando let para reasignar un valor
let fruit = 'Apple';
fruit = 'kiwi';
console.log(fruit);

//utilizando const para reasignar un valor

const animal = 'dog';
animal = 'cat' //aca se produce el error, ya q una constante no puede cambiar su valor incial una vez que la declaramos.
console.log(animal); 

// declarmos una funcion , y dentro de ella un if para ver el alcance de estas variables 
const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();