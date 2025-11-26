let score = "33"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// notes
/* Conversion Outputs:
"33" => 33
"33abc" => NaN(Not a Number)
true => 1
false => 0
null => 0
undefined => NaN
*/

// console.log(typeof NaN);

let isTrue = 1

let booleanIsTrue = Boolean(isTrue)
// console.log(booleanIsTrue);

// notes
/* Conversion Outputs:
0 => false; 1 => true
"" => false
"mohit" => true
*/

let someNumber = 45

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

console.table([typeof score, typeof(score), typeof valueInNumber, typeof NaN, booleanIsTrue, stringNumber, typeof stringNumber]);

