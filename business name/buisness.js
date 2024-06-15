let adj={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let shpnam={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
let anowor={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}


let ran1=Math.floor(Math.random()*3)+1
let ran2=Math.floor(Math.random()*3)+1
let ran3=Math.floor(Math.random()*3)+1

console.log(`Your business name is ${adj[ran1]} ${shpnam[ran2]} ${anowor[ran3]}`)

/*
Certainly! Let's break down the code and explain the meaning of adj[ran1] and *3 + 1.

adj[ran1]: This line of code is accessing the value associated with the randomly generated key ran1 in the adj object. The ran1 variable is generated using Math.floor(Math.random() * 3) + 1, which generates a random number between 1 and 3 (inclusive). The adj object has keys 1, 2, and 3, so adj[ran1] will retrieve the corresponding value associated with the randomly selected key.
*3 + 1: This expression is used to generate a random number between 1 and 3 (inclusive). Here's how it works:
Math.random() generates a random decimal number between 0 and 1.
* 3 multiplies the random decimal number by 3, resulting in a random decimal number between 0 and 3.
Math.floor() rounds down the decimal number to the nearest integer, resulting in a random integer between 0 and 3.
+ 1 adds 1 to the rounded integer, resulting in a random integer between 1 and 3 (inclusive).
By using adj[ran1] and *3 + 1, the code selects a random adjective, shape name, and additional word from the respective dictionaries and combines them into a random business name.



*/