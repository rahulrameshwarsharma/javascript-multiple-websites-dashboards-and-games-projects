let score = 33;
let scores = "33";


// Both are the right way to check console.log

console.log(typeof score);          // this is number
console.log(typeof (scores));       // by using double quotes it became string






// To convert the string into number

let valueInNumber = Number(score);      // Gives output of 33 number

console.log(typeof valueInNumber);
console.log(valueInNumber);




// what if our string doesn't have number, then will it convert the string to number, if yes then what is the output


scores = "33abc"
let valueNaN = Number(scores);
console.log(valueNaN);


// lets write the value of "score = null"; what is the output


let scoree = null
console.log(scoree);

// summery

// 33 => 33
// "33abc" => NaN
// true => 1; false => 0

// Converting boolean data type

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/* summery
when we use:
        1 => true; 0=>false;
        "" => false;
        "shiv" => true;
*/

let someNumber = 35;

let stringNumber = String(someNumber);

console.log(stringNumber);

console.log(typeof stringNumber);
