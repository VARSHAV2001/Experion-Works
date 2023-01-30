// variables

let name1 = "Varsha";
let age1 = 21;

const name2 = "Sam";
const age2 = 18;

var name3 = "Vijya";
var age3 = "25";

console.log(name1, age1);

console.log(name2, age2);

console.log(name3, age3);


// datatypes

// 1. String
// 2. Number
// 3. Array
// 4. Boolean
// 5. Object
// 6. Undefined
// 7. Null

// 

// 1. String

let name4 = "Nimisha";

let name5 = "Akshaya";

console.log(name4, name5);


// 2. Number

let mark1 = 25;

let mark2 = 30;

let length1 = 3.5;

let length2 = 5.7;

let total = length1 + length2;

let sum = mark1 + mark2;

console.log(sum, total);


// array
// poping and pushing

let array1 = ["apple", "ball", "cat", "dog", "egg", "fox"];

let array2 = [1, 2, 3, 4, 5, 6, 7, 8];

let array3 = [{
    studentname: "Divya",
    age: 21,
    department: "Computer Engineering",
    semester: "S5",
    grade: "A",
    isstyding: true,
    iscomplete: false,
    totalmark: undefined,
    library: null

}]

let array4 = [
    function () {
        num1 = 8;
        num2 = 9;
        console.log(num1 + num2);
    }
]
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);



// 4. Boolean

let isWorking = true;

let isStuding = false;

console.log(isWorking);

console.log(isStuding);


// 5.Object

let employee = {
    employeeid: 25,
    employeename: "Archana",
    email: "archana@gamil.com",
    deprtment: "DTS",
    isworking: true,
    isunemployee: false,
    salary: undefined,
    position: null
}

console.log(employee);

// 6. Undefined

let result = undefined;

let grade = undefined;

console.log(result, grade);

// null

let employeename1 = null;

let employeename2 = null;

console.log(employeename1, employeename2);


// The Object Datatype

// Date object:

const date = new Date("2022-03-25");

console.log(date);


// String - properties and methods

let stud_name = "Harsha Madhav";
let char1 = stud_name[0];
let char2 = stud_name[1];
console.log(`${char1}  ${char2}`);

// string length

let stud_name2 = "Varsha";

let length = stud_name2.length;

console.log(length);

// string slice

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

// operator

// arithmetic operator

let num3 = 3;
let num4 = 6;
let total1 = num3 + num4;

let total2 = num3 - num4;

let total3 = num3 * num4;

let total4 = num3 / num4;

let total5 = num3 % num4;

let total6 = num3++;

console.log(total1);

console.log(total2);

console.log(total3);

console.log(total4);

console.log(total5);

console.log(total6);

// assignment operator

let number = 6;

console.log(number);


// comparison operator

let pass1 = 2;
let pass2 = 3;
if (pass1 == pass2) {
    console.log(true);
} else {
    console.log(false);
}

if (pass1 === pass2) {
    console.log(true);
} else {
    console.log(false);
}

if (pass1 != pass2) {
    console.log(true);
} else {
    console.log(false);
}

if (pass1 !== pass2) {
    console.log(true);
} else {
    console.log(false);
}

if (pass1 > pass2) {
    console.log(true);
} else {
    console.log(false);
}

if (pass1 < pass2) {
    console.log(true);
} else {
    console.log(false);
}

// loop

let array = [1, 2, 5, 3, 6, 3];
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(element);
}

// function

function add(value1, value2) {
    return value1 + value2;
}

let sum1 = add(5, 6);
console.log(sum1);


// break & continue
// break
let pass_value = [5, 6, 8, 4, 9, 3];

for (let i = 0; i < pass_value.length; i++) {
    console.log(i);
    if (array1[i] == 4) {
        break;
    }
}


// continue

let name = 'd%hb&bygy@';

let namevalue = ''
for (let i = 0; i < name.length; i++) {
    if (name[i] == '%' | name[i] == "&" | name[i] == "@") {
        continue
    }
    namevalue += name[i]
}
console.log(namevalue);


//class

class employees {
    emp_name = '';
    age = 0;
    constructor(emp_name, age) {
        this.emp_name = emp_name
        this.age = age
    }

    favourite_colour = function (colour) {
        console.log(this.emp_name + " of age " + this.age + " and her favourite colour is " + colour);
    };

};

let emp1 = new employees("nandana", 23);
let emp2 = new employees("anaha", 25);

emp1.favourite_colour('green');
emp2.favourite_colour('white');


// asynchronous

// callback

function favouritecake(cake, flavour, time) {
    setTimeout(() => {
        return cake(flavour, time)
    }, time);
}
favouritecake(function (favcake, time) {
    console.log(`My favourite cake is ${favcake} flavour cake, it make in ${time / 1000} second`)
}, "vanila", 3000);


// promise

function favouritecake(cake, flavour, time) {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            cake(flavour, time);
        }, time);
    })

}
favouritecake(function (favcake, time) {
    console.log(`My favourite cake is ${favcake} flavour cake, it make in ${time / 1000} second`)
}, "vanila", 3000).then(function (res) {
    console.log(res);
}).catch(function (err) {
    console.log(err);
})
