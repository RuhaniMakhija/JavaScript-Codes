let arr=[1,2,3,[5,[7],8,]];

console.log(arr.flat(2));


//Array Flat ployfill

Array.prototype.myFlat=function(depth){
    let arr=this;
    let res=[]
    if(!Array.isArray(arr)){
        throw new Error(`${arr}.flat is not a function`);
    }

    arr.forEach((ele)=>{
        if(Array.isArray(ele) && depth>0){
            res.push(...ele.myFlat(depth-1));
        }else{
            res.push(ele);
        }
    })

    return res;
    
}

console.log(arr.myFlat(2));