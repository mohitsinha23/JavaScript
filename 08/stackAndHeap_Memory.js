// Stack (Primitive)
let myYoutubename = "mohitsinha"

let anothername = myYoutubename

anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// Heap (Non-Primitive)
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sinhamohit@gmail.com"

console.table([userOne.email, userTwo.email]);