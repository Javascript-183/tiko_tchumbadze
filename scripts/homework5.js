// @ts-check
"use strict";

// 1.	შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი 
// მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს 
// დავალება ციკლების მეშვეობით.

let myArray = [5, 6, 7, 8, 9, 15, 18, 20, 32, 40];
let newArray = [];
let index = 0;

while (index <= myArray.length) {
  newArray.push(myArray[index]);
  index = index + 3;
}

// console.log(newArray);

// 2.	შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. 
// მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let myArray2 = [];
let num = 10

while (num <= 10 && num >=1) {
    myArray2.push(num)
    num = num - 1
}

// console.log(myArray2);

// 3.	მოცემული მასივიდან (არ იყო დავალებაში მასივი მოცემული, ამიტომ ვივარაუდე 
// და ბოლოში ჩავსვი ამოსაღები სიტყვა)
	
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 
// 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: 
// ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს 
// დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე 
// დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

let myArray3 = ['John', 'Nick', 'Mary', 'Sue', 'Ann', 'Bob']; 

for (let i = 0; i < 5; i++) {
  myArray3.pop();
}

// console.log(myArray3)

// let myArray3 = ['John', 'Nick', 'Mary', 'Sue', 'Ann', 'Bob']
// myArray3.pop()

// console.log(myArray3)

// 4.	ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, 
// რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, 
// მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: 
// number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, 
// მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.


function fun(number, power) {
  if (power == 1) 
    return number;
  else
    return number * fun(number, power - 1);
}
let number = 5;
let power = 3

// console.log(fun(number, power));

// 5.	შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში 
// დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, 
// და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, 
// Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე 
// იყოფა უნაშთოდ და გამოიტანეთ Buzz, 
// ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.

function divisible3and5(x) {
  for (let i = 1; i <= x; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
      } else if (i % 5 == 0) {
        console.log("Buzz");
      } else if (i % 3 == 0 ) {
        console.log("Fizz");
      } else {
        console.log(i);
      }
  }
}
let x = 100;
// divisible3and5(x);

// 6.	შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), 
// რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის 
// პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120


function factorialCalculator(number) {
    let n = 1;
    for (let i = 2; i <= number; i++)
        n *= i;
    return n;
}

// console.log(factorialCalculator(5));

// 7.	შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს 
// მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
// console.log(capitalize("javascript"))

// 8.	შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი.
//  მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს 
// თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.
function blankStringChecker(testString) {
  if (testString.length == 0) {
    return "this string is blank"
  } else {
    return "this string is not blank"
  }
}

// console.log(blankStringChecker(""))


// 9.	შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. 
// მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => 
// გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

function stringToArray(testString) {
  let arr = testString.split(" ")
  return arr
}

// console.log(stringToArray("Hello, World"))


// 11.	შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში


function longstr(str) {
  str = str.match(/[a-zA-Z0-9]+/gi);
  let largest = "";
  for (let i = 0; i < str.length; i++) {
      if (str[i].length > largest.length) {
          largest = str[i];
      }
  }
  return largest;
}

// console.log(longstr("my name is tinatin"));

