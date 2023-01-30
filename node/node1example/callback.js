
let emp = [
    "varsha",
    "nimisha",
    "akshaya",
    "bibin",
    "sreenath",
    "aswin",
    "akhil"
];


function companyemployee(employee, punching, time) {
    for (let i = 0; i < employee.length; i++) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(punching(employee));
                rej();
            }, time);
        })
    }

}



companyemployee(emp, function (employee) {
    for (let i = 0; i < employee.length; i++) {
        if (employee[i] != "akhil") {
            console.log(`${i} . ${employee[i]} --access granted`);
        }
        else {
            console.log(`${i} . ${employee[i]} ---access denied`);

        }

    }
}).then(function (res) {
    console.log(res)
}).catch(function (err) {
    console.log(err)
})
