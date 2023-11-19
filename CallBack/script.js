//Callback function example

// setTimeout(()=>{
//     console.log("Timer");
// },3000);

// function x(y){
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// })


// //Callbacks example through Event Listener
// document.getElementById("clickMe").addEventListener("click",function xyz(){
//     console.log("Button Clicked");
// })

// //Example with closers
// function attachEvent(){
//     let count=1;
//     document.getElementById("click").addEventListener("click",function abc(){
//         console.log("Button 2 clicked",count++);
//     })
// }
// attachEvent();

setTimeout(()=>{
    console.log("CB setTimeout")
},1000)

fetch("https://jsonplaceholder.typicode.com/posts").then(()=>{
    console.log("CB fetch")
})