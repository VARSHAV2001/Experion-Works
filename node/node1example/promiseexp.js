function promise(cb) {
    let resolve = function (arg) {
        console.log(arg);
    }

    let reject = function () {
        console.log("reject");
    }
    cb(resolve, reject);
}


promise(function (res, rej) {
    res("hai");
    rej();
})