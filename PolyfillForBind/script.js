let name={
    firstname:"Ruhani",
    lastname:"Makhija"
}

let printName=function(state,hometown){
    console.log(this.firstname+" "+this.lastname+" from "+state+","+hometown);
}

let print=printName.bind(name,"Gujarat");
print("Ahmedabad");


Function.prototype.mybind=function(...args){
    let obj=this;
    let params=args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2])
    }
}

let print2=printName.mybind(name,"Gujarat");
print2("Ahmedabad");

