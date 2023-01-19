function* iterate(array){
    for (let value  of array) {
        yield value;
    }
}
const it = iterate(['Enzo','Agostina','Ana','Macarena','Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);