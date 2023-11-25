document.querySelector("#categories").addEventListener("click",(e)=>{
    if(e.target.tagName=='LI'){
        window.location.href="/"+e.target.id;
    }
})


document.querySelector("#form").addEventListener("keyup",(e)=>{
    console.log(e.target.dataset);
    if(e.target.dataset.uppercase!=undefined){
        e.target.value=e.target.value.toUpperCase();
    }
})