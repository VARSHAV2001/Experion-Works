function addnum(cb,num1,num2,time){
    setTimeout(()=>{
        let sum = num1 + num2;
        cb(sum)
    },time)
}

addnum(function(result){
    console.log(`Sum = ${result}`)
},5,10,10000);



// promise

function addnum(cb,num1,num2,time){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(`Sum = ${num1 + num2}`) 
        },time)
    })
}

addnum(function(result){
    console.log(result)
},5,10,1).then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
})
