// asynchronous :Asynchronous programming is a design pattern which ensures the non-blocking code execution.

// callback function: a function that is to be executed after another function has finished executing.

function makeicecream(icecream, flavour) {

    setTimeout(() => {
        return icecream(flavour);

    }, 5000);
}

let grade = makeicecream(function (flav) {
    console.log(flav + " flavoured cream")
    return "good"
}, "strawberry");

console.log(grade);

//-----------------------------------------------------

function favouritefood(biriyani, icecream) {
    setTimeout(() => {
        return biriyani(icecream);
    }, 4000);
}

let food = favouritefood(function (favfood) {
    console.log(favfood + " and vanila icecream")
    return "tasty"
}, "chicken biriyani");

console.log(food);

// ---------------------------------------------------------------------------

function favouritecolor(blue, green) {
    setTimeout(function () {
        return blue(green);
    }, 2000);
}

let color = favouritecolor(function (favcolor1) {
    console.log("My favourite color is " + favcolor1)
}, "light green", "dark blue")

console.log(color);

// promice:"Producing code" is code that can take some time ,
//"Consuming code" is code that must wait for the result
//A Promise is a JavaScript object that links producing code and consuming code

function makeicecream(icecream, flavour) {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            res('hello')

        }, 5000)
    });

}

makeicecream(function (flav) {
    console.log(flav + " flavoured cream");
    return "good"
}, "strawberry").then(function (res) {
    console.log(res)
})
    .catch(function (err) {
        console.log(err)
    })

// ---------------------------------------------------------------------------------------------------

function favouritefood(biriyani, icecream) {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            res('Hai friends');
        }, 2000);
    });

}

favouritefood(function (favfood) {
    console.log(favfood + " and vanila icecream");
    return "tasty"
}, "chicken biriyani").then(function (res) {
    console.log(res)
})
    .catch(function (err) {
        console.log(err)
    })

// --------------------------------------------------------------------------------- 



