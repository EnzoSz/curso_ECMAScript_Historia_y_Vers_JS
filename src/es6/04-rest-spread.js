// arrays destructuring

let fruits = ['apple','banana'];
let [a,b] = fruits;
console.log(a, fruits[1]);

//object destructuring

let user = { username: 'Enzo',age: 27};
let {username,age}= user;
console.log(username,user.age);

//spread operator
let person = {name:'Enzo',age:27};
let country = 'ARG';

let data = { ...person,country};
console.log(data);

//rest 
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1,1,2,3);