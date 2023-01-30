let calculate = function (cb, num1, num2, time) {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            res(cb(num1, num2))
        }, time)
    })
}


module.exports = { cal: calculate }

