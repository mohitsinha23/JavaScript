// Primitive

/* 7 types
    1-> String
    2-> Number
    3-> Boolean
    4-> null
    5-> undefined
    6-> Symbol
    7-> BigInt
*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const temperature = null
let userEmail;
const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId);
const bigNumber = 34453454344567746n
console.log(typeof bigNumber);
console.log(Id);




// Reference type (Non - Primitive)

/* 3 types
    1-> Array
    2-> Objects
    3-> Functions
*/

const heros = ["mohit", "joy", "Abhi"]
let myObj = {
    name: "mohit",
    age: 22
}

const myFunction = function (){
    console.log("hello world");
    
}