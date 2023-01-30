const cb = require(`./cbexp2`);

console.log(cb);

cb.pass(function (data1, data2) {
    return data1 + data2;
}, "varsha", "12345", 2000).then(function (output) {
    console.log(output);
})
