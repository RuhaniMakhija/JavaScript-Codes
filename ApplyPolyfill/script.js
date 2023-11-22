let name={
    firsname:"Ruhani",
    lastname:"Makhija"
}

let printName=function(age){
    console.log(`${this.firsname} ${this.lastname} is ${age} years old`)
}

printName.apply(name,[23])

//polyfill for apply method

Function.prototype.myApply=function(obj={}, ...args){

    if(typeof this!=='function'){
        throw new Error("Not callable")
    }

    if(!Array.isArray(...args)){
        throw new Error("TypeError: CreateListFromArrayLike called on non-object")
    }

    obj.fn=this;
    obj.fn(...args);
}

printName.myApply(name,[23])