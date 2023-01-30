// ES6 

// let,const,template literals,arrow functions,spread operator,higher order function
// rest,object literal,classes,modules,
// destructuring,default parameters

let name = "bibin sasikumar"
let age = 22;
console.log(`
the firstname is ${name.substring(0, 5)} 
the last name is ${name.substring(6, name.length)} 
and age is ${age}`)


// let greet = (name,age) => {
// console.log(`good morning ${name}`);
// return `good morning ${name}`;
// }
// let message = greet("nimisha");
// console.log(message)

let greet = name => console.log(`Good morning ${name}`)

let num1 = 10;
let num2 = num1;

let person = {
    name: "bibin",
    age: 22,
    score: 150
}

let person2 = { ...person }

person2.name = "nimisha";

person2.age = 22;

person2.score = 100;

console.log(person2)
console.log(person)