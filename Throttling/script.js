window.addEventListener("onresize",(event)=>{
    console.log(event);
})

let counter=1;
const getData=()=>{
    console.log("Button Clicked",counter++);
}

function throttle(fn,d){
    
    let flag=true;
    return function(){
        let context=this,
        args=arguments;
        if(flag){
            fn.apply(context,args);
            flag=false;
            setTimeout(()=>{
                flag=true
            },d)
        }
    }
}

const betterFunction=throttle(getData,300);