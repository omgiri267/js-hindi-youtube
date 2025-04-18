// Primitive
// 7 types: String, Number, Boolean, Nun, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let usreEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
//console.log(id === anotherid);

//const bigNumber = 9898989889989898n


// Reference (Non Primitive)
// Array, Objects & Functions

const heros = ["Saktiman", "naagraj", "doga"];

let myObj = {
    name: "omgiri",
    age: 43,
}

const myFunction = function(){
    console.log("Hello World");
    
}

//console.log(typeof anotherid);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "omgiriyoutubechcom"

let anothername = myYoutubename
anothername = "MoniChennal"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "omprakash267@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "omprakash267@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);
