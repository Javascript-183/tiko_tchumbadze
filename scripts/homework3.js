// @ts-check
"use strict";

// 1
function square(num){
    return num * num
}

console.log(square()); 

// 2
function celsiusToFahrenheit(celsius) {
    return ((celsius * 9/5) + 32);
}

console.log(celsiusToFahrenheit()); 

// 3

function inRange(number) {
    if (number > 20 && number <= 40) {
        return "The number is in this range.";
    } else {
        return "The number isn't in this range.";
    }

}

// 4
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "It's a leap year";
    } else {
        return "It's not a leap year";
    }
}

// 5
let num1 = prompt("Enter number 1:");
let action = prompt("Enter action:");
let num2 = prompt("Enter number 2:");

function calculator(num1, action, num2) {
    num1 = Number(num1);
    num2 = Number(num2);     
    if (action === "+") {
        console.log(num1 + num2);
    } else if (action === "-") {
        console.log(num1 - num2);
    } else if (action === "*") {
        console.log(num1 * num2);
    } else if (action === "/") {
         console.log(num1 / num2);
    } else {
        console.log("Incorrect operator! please choose either of +,-,*,/")
     }
            
}
calculator()
