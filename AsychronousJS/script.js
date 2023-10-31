

var xhr=new XMLHttpRequest();

xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);

xhr.onreadystatechange=function(){
    
   
    if(xhr.readyState===4 && xhr.status===200){
        

        var data=JSON.parse(xhr.responseText);
        console.log(data);
    }
}

xhr.send();
