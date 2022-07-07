/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
let length = 11;
let width = 12;

function area(length, width){

    let rectangleArea = length * width;
    return rectangleArea;
}

console.log("the area of rectangle is", area(length, width))



// EXERCISE 2
//  Write a function called "crazySum" which receives two integers as parameters.
//  It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.

let number1 
let number2 

function crazySum(number1, number2){

    let sum = number1 + number2;
    return sum;
}

console.log("the sum is", crazySum(30,20))




//  EXERCISE 3
//  Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
//  It should return triple their absolute difference if the given number is greater than 19.


function crazyDiff(number){
let number1 = 19;
if(number > number1){
    return Math.abs(number - number1) * 3;
}
else{
    return Math.abs(number - number1)
}

}

console.log(crazyDiff(20))
console.log(crazyDiff(9))




//  EXERCISE 4
//  Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.

function boundary(n){
    if(n >=20 && n<=100 || n === 400){
        return true;
    }
    else{
        return false;
    }

    
}
console.log(boundary(100))
console.log(boundary(450))







//  EXERCISE 5
//  Write a function called "strivify" which accepts a string as a parameter.
//  It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.

let word = "strive";
function strivify(string){
    
    if(string === word){
        return string;
    }
    else{
        return (string +" "+ word);
    }

}
console.log(strivify("strive"))
console.log(strivify("hello"))






//  EXERCISE 6
//  Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
//  HINT: Modulus Operator


function check3and7(n){
    if(n >=0 && n % 3 == 0 || n % 7 == 0 ){
    return true;
}
else{
    return false;
}
}
console.log(check3and7(9))
console.log(check3and7(12))
console.log(check3and7(23))





//  EXERCISE 7
//  Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).


function reverseString(str){
    let splitString = str.split("");
    let reverseStringArray = splitString.reverse();
    let revstring = reverseStringArray.join("");

    return revstring;
}
console.log(reverseString("hello world how is it going"))








//  EXERCISE 8
//  Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.

function upperFirst(str){
    let splitString = str.split(" ");
    for(i = 0; i < splitString.length; i++){
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }

    return splitString.join(" ")
}

console.log(upperFirst("hello world how is it going"))






//  EXERCISE 9
//  Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.


function cutString(str){
    let string = str.split("");
    string.shift()
    string.pop()
    return string.join("");

}

console.log(cutString("hello world how is it going"))







//  EXERCISE 10
//  Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.


function giveMeRandom([n]){
    let numbers = Array.from( { length: 11 }, Math.floor(Math.random()));
   for(i = 1; i < numbers.length; i++){

   }

    return numbers;

}
console.log(giveMeRandom([]))



//  WHEN YOU ARE FINISHED
//  Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.


