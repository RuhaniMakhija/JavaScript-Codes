let arr=[1,2,3,4];

arr.forEach((ele,index,arr)=>{
    console.log(ele);
})


//Polyfill for forEach

Array.prototype.myforEach=function(cb){
    let array=this;
    for(let i=0;i<array.length;i++){
        cb(array[i],i,array)
    }
}

arr.myforEach((ele,index,arr)=>{
    console.log(ele);
})