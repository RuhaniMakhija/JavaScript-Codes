let arr=[1,2,3,5,6];

let result=arr.map((ele,index,arr)=>{
    return ele*2;
})

console.log(result);

//polyfill for map

Array.prototype.myMap=function(cb){
    let res=[];
    let array=this;
    for(let i=0;i<array.length;i++){
        res.push(cb(array[i],i,array))
    }
    return res;
}

let result2=arr.myMap((ele,index,arr)=>{
    return ele*2;
})
console.log(result2);
