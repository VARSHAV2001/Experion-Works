const cb = require(`./cbexp`);
console.log(cb)

cb.cal(function (data1, data2) {
    return data1 + data2;
}, 20, 30, 5000).then(function (val) {

    console.log(val);
});
