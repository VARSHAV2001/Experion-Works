// variables, datatypes,operators, conditional statements,loops,functions,class,asynchronous,es6

// variables: Variables are containers for storing data (storing data values).Eg. pass, names etc.

let pass = 0;
var names = 0;

const num1 = 3;
const num2 = 5;

let total = num1 + num2;
console.log(total);


// datatypes: A JavaScript variable can hold any type of data. Datatypes are,

// string,number,array,boolean,object,undefined,null

// string - properties,methods
// number - properties,methods
// array  - properties,methods
// object - properties,methods

// declaration

// string: A string (or a text string) is a series of characters like "John Doe".

let fname1 = "varsha";

var fname2 = "varsha";

const fname3 = "varsha";

console.log(fname1, fname2, fname3);


// number: All JavaScript numbers are stored as decimal numbers (floating point).

let nums1 = 45;

var nums2 = 55;

const nums3 = 60;

console.log(nums1, nums2, nums3);


// array: JavaScript arrays are written with square brackets. Array items are separated by commas.

let student1 = [1, 3, 5, 2, 9];

var student2 = [1, 3, 5, 2, 9, [2, 3, 4, 5]];

const student3 = [1, 3, 5, 2, 9, { name: "varsha", age: 21 }];

let student4 = ["varsha", "fathima", "kavitha", "vijitha", "surabhi"];

var student5 = ["varsha", "fathima", "kavitha", "vijitha", "surabhi", true, undefined, null];

const student6 = ["varsha", "fathima", "kavitha", "vijitha", "surabhi", function () { console.log(student1) }];



console.log(student1, student2, student3, student4, student5, student6,);



// boolean: Booleans can only have two values: true or false.

let number1 = 5;
let number2 = 4;

if (number1 == number2) {
    console.log(true);
} else {
    console.log(false);
}


// object:JavaScript objects are written with curly braces {}. Object properties are written as name:value pairs, separated by commas.

let student_info1 = {
    name: "varsha",
    age: 21,
    grade: ["A", "B", "C"],
    ispass: true,
    college: {
        department: "computer engineering",
        emaiL: "varsha@gmail.com",
        contact: 8129944571


    }


}

console.log(student_info1);


var student_info2 = {
    name: "varsha",
    age: 21,
    grade: ["A", "B", "C"],
    ispass: true,
    college: {
        department: "computer engineering",
        emaiL: "varsha@gmail.com",
        contact: 8129944571


    }


}

console.log(student_info2);


const student_info3 = {
    name: "varsha",
    age: 21,
    grade: ["A", "B", "C"],
    ispass: true,
    college: {
        department: "computer engineering",
        emaiL: "varsha@gmail.com",
        contact: 8129944571
    }
}

console.log(student_info3);


// undefined:In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

let students1 = undefined;

var students2 = undefined;

const students3 = undefined;

var students4;

console.log(student1, student2, student3, students4);



// null:An empty value has nothing to do with undefined. An empty string has both a legal value and a type.

let stud1 = null;

var stud2 = null;

const stud3 = null;


console.log(stud1, stud2, stud3);




// Operators

// assignment operator: The Assignment Operator (=) assigns a value to a variable.

let numss1 = 5;
let numss2 = 7;

console.log(numss1, numss2);


// arithmetic operator:Arithmetic Operators are used to perform arithmetic on numbers
// +, -, *, /, %, ++, --

let num3 = 8;
let num4 = 7;

let total1 = num3 + num4;
let total2 = num3 - num4;
let total3 = num3 * num4;
let total4 = num3 / num4;
let total5 = num3 % num4;


console.log(total1, total2, total3, total4, total5);

let text1 = "Varsha";
let text2 = "V";
let text3 = text1 + " " + text2;

console.log(text3);



// comparison operator: 
// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator



// logical operators
// &	logical and
// |	logical or
// !	logical not


// augmented

// +=, -=, *=, /=

let text4 = "What a very ";
console.log(text4 += "nice day");


let supersecretpassword = 1234;
console.log(supersecretpassword += 1);


// false values: 0, null, false, undefined, " "
// all other values are true condition

if (!false) {
    console.log("hai");
}
else {
    console.log("hello");
}

// conditional statement

if (num1 == num2) {
    console.log('The numbers are equal');
} else {
    console.log('The numbers are not equal')
}


// loop

let array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}


// functions:A JavaScript function is a block of code designed to perform a particular task.


function myFunction(a, b) {
    return a * b;             // Function returns the product of a and b
}

let mul = myFunction(4, 3); // Function is called, return value will end up in mul

console.log(mul);


// break & continue
// The break statement "jumps out" of a loop.

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array1.length; i++) {
    console.log(i)
    if (array1[i] == 6) {
        break;
    }
}

// The continue statement "jumps over" one iteration in the loop.

let name = 'v@@a!rs%h&a';

let ext_name = ''

for (let i = 0; i < name.length; i++) {
    if (name[i] == '@' | name[i] == "!" | name[i] == "%" | name[i] == "&") {
        continue
    }
    ext_name += name[i]
}
console.log(ext_name);


// class:Use the keyword class to create a class.

class Students {
    name = '';
    age = 0;
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    favourite_colour = function (colour) {
        console.log(this.name + " of age " + this.age + " and her favourite colour is " + colour);
    };

};

let girl1 = new Students("divya", 21);
let girl2 = new Students("archana", 22);

girl1.favourite_colour('blue');
girl2.favourite_colour('black');

