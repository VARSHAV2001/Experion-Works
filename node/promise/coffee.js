let staffs = ["varsha", "nimisha", "akshaya", "bibin", "sreenath"];

let options = ["Tea", "Coffee", "HotWater"];

function coffeemaker(coffeemaking, takecup, washcup, optionselect, fillcup, refillmachine, time) {
    setTimeout(() => {
        coffeemaking(takecup, washcup, optionselect, fillcup, refillmachine)
    }, time)
}

function takecup() {
    setTimeout(() => {
        console.log(`Please take the cup`);
    }, 1000);
}

function washcup() {
    setTimeout(() => {
        console.log(`Please wash the cup`);
    }, 4000);
}

function optionselect() {
    setTimeout(() => {
        console.log(`Select the option`);
        console.log(`Option
        1.Tea
        2.Coffee
        3.Hot Water`);
        for (let i = 0; i < options.length; i++) {
            if (options[i] == Tea) {
                console.log(``);
            } else if (options[i] == Coffee) {
                console.log(`Enjoy your Coffee`);
            } else if (options[i] == HotWater) {
                console.log(`Enjoy your Hot Water`);
            }
            else {
                console.log(`Please choose the option`);
            }
        }
    }, 4000)
}

// coffeemaker(staffs,function(takecup){
//     setTimeout(()=>{

//     },4000)
// })