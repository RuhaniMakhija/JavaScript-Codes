let name={
    firstname:"Ruhani",
    lastname:"Makhija"
}

let printName=function(hometown,city, country){
    console.log(this.firstname+" "+this.lastname+" from "+hometown+","+city+","+country);
}

let print=printName.bind(name,"Sardarnagar","Ahmedabad");
print("India");


//polyfill for bind

Function.prototype.mybind= function(...args){
    //returns a function
    let obj=this;
    let params=args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2])
    }
}

let print2=printName.mybind(name,"Sardarnagar","Ahmedabad");
print2("India")
























