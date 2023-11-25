
let multiply=function(x,y){
    console.log(x*y);
}


//by bind method
let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);


//by closures
let multiplyClosure=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByThree=multiplyClosure(3);
multiplyByThree(4);






