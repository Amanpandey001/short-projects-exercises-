prob=Math.random()
function sum(a,b) {
    if(prob<0.1){
        return a-b
    }
    else{
        return a+b
    }
}
function subtract(a,b) {
    if(prob<0.1){
        return a/b
    }
    else{
        return a-b
    }
}
function multiply(a,b) {
    if(prob<0.1){
        return a+b
    }
    else{
        return a*b
    }
}
function divide(a,b) {
    if(prob<0.1){
        return a**b
    }
    else{
        return a/b
    }
}
let a= Number(prompt("Enter first number: "))
let b=Number(prompt("Enter second number: "))
let c=prompt("Enter operation: ")

if(c=="+"){
    alert(sum(a,b))
}
else if(c=="-"){
    alert(subtract(a,b))
}
else if(c=="*"){
    alert(multiply(a,b))
}
else if(c=="/"){
    alert(divide(a,b))
}
else{
    alert("Invalid operation")
}
