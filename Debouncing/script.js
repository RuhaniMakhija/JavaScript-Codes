let counter=1;
const getData=()=>{
    console.log("Fetaching data",counter++)
}

function debounce(fn,td){
    let timer;
    return function(){
        let context=this,
        args=arguments;
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn.apply(context,args);
        },td)
    }
}

const betterFunction= debounce(getData,300)