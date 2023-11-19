let name={
    firstname:"Ruhani ",
    lastname:"Makhija",
}

printFullName=function(hometown,state){
    console.log(this.firstname+" "+this.lastname+" from "+hometown+", "+state+".");
}
printFullName.call(name,"Dubai","UAE");

let name2={
    firstname:"Sangeeta ",
    lastname:"Makhija",

}

//function borrowing
printFullName.call(name2,"Ahmedabad","Gujarat");


printFullName.apply(name,["Mumbai","Maharastra"]);

printFullName.apply(name2,["raipur","chatisgarh"])


//bind actually returns a new function which can be called later on


//bind gives the copy which can be invoked later
let newFun=printFullName.bind(name,"Jaipur","Rajasthan");
console.log(newFun);
newFun();