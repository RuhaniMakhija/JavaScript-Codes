
const p1=new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P1 Success"),3000);
})

const p2=new Promise((resolve, reject)=>{
    setTimeout(()=>reject("P2 failed"),1000);
})

const p3=new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("P3 success"),2000);
})


//Promise.all
Promise.all([p1,p2,p3])
    .then(res=>console.log(res))
    .catch((err)=>{
        console.log(err);
    });

//Promise.allSettled
Promise.allSettled([p1,p2,p3])
    .then(res=>console.log(res))
    .catch((err)=>{
        console.log(err);
    });

//Promise.race  
Promise.race([p1,p2,p3])
    .then(res=>console.log(res))
    .catch((err)=>{
        console.log(err);
    })

//Promise.any 
Promise.any([p1,p2,p3])
    .then(res=>console.log(res))
    .catch((err)=>{
        console.log(err);
    })