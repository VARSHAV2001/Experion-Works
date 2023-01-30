// function calculate(cb,num1,num2){
//     cb(num1,num2);
// }

// calculate(function(pass1,pass2){
//     let result = pass1 + pass2;
//     console.log(`The result is ${result}`);
// },6,7);


// -------------------------------------------------------------

function calculate(cb, num1, num2) {
    let result = num1 + num2;
    cb(result);
}

calculate(function (res) {
    console.log(`The result is ${res}`);
}, 5, 9);

