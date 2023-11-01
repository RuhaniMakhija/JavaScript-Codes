//What is async?
//even if we give value it always returns a promise
async function getData(){
    return "ruhani";
}

const dataPromise=getData();
//To get the data from promise using then
dataPromise.then((data)=>console.log(data));


//creating promise and returning from async function
const promise=new Promise((resolve, reject)=>{
    resolve("Promise resolved");
})

async function getAns(){
    return promise;
}

const ans=getAns();

ans.then((res)=>console.log(res));

//How to use async await together?

//creating promise
const p=new Promise((resolve,reject)=>{
    resolve("Promise Successfully resolved");
})

//resolving promise using async await
async function getValue(){
    const value=await p;
    console.log(value);
}
getValue();



//using async await and see how it works with 2 promise

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p1 resolved")
    },10000)
})

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p2 resolved")
    },5000)
})

async function util(){
    const data1=await p1;
    console.log(data1);
    const data2=await p2;
    console.log(data2);
}

util();

console.log("hi");

//real life example of async await 

async function getUserDetails(){
    try{

        const data=await fetch("https://api.github.com/users/RuhaniMakhija");
        const json=await data.json();
        console.log(json);

    }catch(err){
        
        console.log(err);
    }
}

getUserDetails();

