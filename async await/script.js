
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

