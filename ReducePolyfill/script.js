let arr =[1,2,3,4,5];

const res=arr.reduce((acc,curr)=>{
    return acc+curr;
},0)

console.log(res);

//Polyfill for reduce


Array.prototype.myReduce=function(cb, initialValue){
    let arr=this;
    let acc=initialValue;
    for(let i=0;i<arr.length;i++){
        acc=acc?cb(acc,arr[i]):arr[i];
    }
    return acc;
}

const res2=arr.reduce((acc,curr)=>{
    return acc+curr;
},0)

console.log(res2);
