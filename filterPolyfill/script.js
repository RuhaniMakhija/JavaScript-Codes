let arr=[1,5,4,7,3];

const res=arr.filter(ele=>{
    return ele>4;
})
console.log(res);


//polyfill for filter

Array.prototype.myFilter=function(cb){
    let arr=this;
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i])){
            res.push(arr[i]);
        }
        
    }
    return res;
}

const res2=arr.myFilter(ele=>{
    return ele>4;
})
console.log(res2);