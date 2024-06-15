
// console.log(color)
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor=color
//     e.style.color=color
// })


for(let i=1;i<=5;i++){
    let color="#"+Math.floor(Math.random()*16777215).toString(16);
    let text="#"+Math.floor(Math.random()*16777215).toString(16);
    let cls=".box"+i
    document.querySelector(cls).style.backgroundColor=color;
    document.querySelector(cls).style.color=text;
    
}
