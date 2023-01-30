
function calculate() {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            res(10 + 10)
        }, 7000)
    })

}
calculate().then(function (result) {
    console.log(result)
})

let sum = calculate();
console.log(sum)

