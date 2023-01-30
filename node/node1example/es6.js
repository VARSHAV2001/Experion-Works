// ES6 

// let,const,template literals,arrow functions,spread operator,higher order function
// rest,object literal,classes,modules,
// destructuring,default parameters


// let: The let keyword allows you to declare a variable with block scope.

let num1 = 10;

let names1 = "varsha";


// const: The const keyword allows you to declare a constant 

const name1 = "varsha";


// template literals: Template Literals use back-ticks (``) rather than the quotes ("") to define a string

let names = `varsha`;


// arrow function: Arrow functions allows a short syntax for writing function expressions.

let greet = (name) => {
    console.log(`good morning ${name}`);
    return `good morning ${name}`;
}
let message = greet("varsha");
console.log(message);


let greet1 = name => console.log(`Good morning ${name}`);

// spread operator: The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

let nums1 = 10;
let nums2 = num1;

let person = {
    name: "divya",
    age: 22,
    score: 150
}

let person2 = { ...person }

person2.name = "archana";
person2.age = 22;
person2.score = 100;

console.log(person2);
console.log(person);


// higher order functions: a function which takes another function 
// as an argument or returns a function is known as a higher order function

//eg: map, filter, forEach, reduce,



// object literal:an object literal is a comma-separated list of name-value pairs inside of curly braces.

//  values can be properties and functions. Here’s a snippet of 
//an object literal with one property and one function.

let info = {
    names: "bibin sasikumar",
    age: 22,
    fav_food: ['biryani', 'barbeque'],


    place: "Kottayam",
    favourite_car: "Punch",
    company: "Experion",
    salary: '20 lakhs ctc'
}


console.log(names, age, fav_food, place, favourite_car, company, salary);



// destructuring: 

// 
let info1 = {
    name: "bibin sasikumar",
    age: 22,
    fav_food: ['biryani', 'barbeque'],


    place: "Kottayam",
    favourite_car: "Punch",
    company: "Experion",
    salary: '20 lakhs ctc'
}


let name = info1.name;
let age = info1.age;
let fav_food = info1.fav_food;
let place = info1.place;
let favourite_car = info1.favourite_car;
let company = info1.company;
let salary = info1.salary;


//let {name,age,fav_food,place,favourite_car,company,salary} = info;


// module:

let calculate = function (cb, num1, num2, time) {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            res(cb(num1, num2))
        }, time)
    })
}


module.exports = { cal: calculate }


// -------------------------------------------------------------------------------------

const cb = require(`./cbexp`);

console.log(cb)

cb.cal(function (data1, data2) {

    return data1 + data2;

}, 20, 30, 5000).then(function (val) {

    console.log(val);
});


