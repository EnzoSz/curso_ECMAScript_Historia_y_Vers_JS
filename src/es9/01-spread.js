const user = {username: 'enzosz', age:27,country: 'ARG'};
//separamos username del objeto user para mostrarlo en cosola, y asignamos los demas atributos a values
const{username, ...values}= user; 

console.log(username);
console.log(values);