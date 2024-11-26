//@ts-check
//string Data type

let variable = [2, 3, 9, 15]; 

// 1 დავალება
if (Array.isArray(variable)) { 
  console.log('variable is an array'); 
} else { 
  console.log('variable is not an array'); 
}

// 2 დავალება
console.log(variable.at(0));

// 3 დავალება
console.log(variable.at(-1));


let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let  o = ["th","st","nd","rd"];

// 4 დავალება
console.log(`1`+o.at(1), "choice is",color[0]+".");
console.log(`2`+o.at(2), "choice is",color[1]+".");
console.log(`3`+o.at(3), "choice is",color[2]+".");

// 5 დავალება

let student = {
    firstName: "Tiko", 
    lastName: "Tchumbadze",
    address: "Georgia, Tbilisi",
    hobby: "travel",
    }

student.age = 34;
delete student.age;
student.hobby = "gym";

console.log(student);