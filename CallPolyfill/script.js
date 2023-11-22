let name={
    firstname:"Ruhani",
    lastname:"Makhija"
}

let name2={
    firstname:"Aeshsha",
    lastname:"Khan"
}

let printName=function(age){
    console.log(this.firstname+" "+this.lastname+" is "+age+" years old");
}


printName.call(name,18);
printName.call(name2,23);

//Polyfill for call
Function.prototype.myCall=function(obj={}, ...args){
    

    if(typeof this!=='function'){
        throw new Error("not callable");
    }

  
    obj.fn=this;
    obj.fn(...args);
}

printName.myCall(name,18);
printName.myCall(name2,23);