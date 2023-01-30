let passenger = function (cb, username, password, time) {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            res(cb(username, password))
        }, time)
    })
}

module.exports.pass = passenger;