/*
var a = 1;
let b = 2;
const c = 3;

a = 10;
b = 20;
// c = 30;

console.log(a);
console.log(b);
console.log(c);
*/

// -------------------------------------------

/*
console.log(typeof "csw");
console.log(typeof 13);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof 10n);
console.log(typeof {});
console.log(typeof []);
*/

// -------------------------------------------

/*
console.log("5" + 3);       //"53"
console.log("5" - 2);       //2
console.log("5" * "2");     //10
console.log(true + 1);      //2
console.log(false + 1);     //1
console.log("5" + null);    //"5null"
console.log(1 + undefined); // NaN
*/

/*
+ with a string → does STRING CONCATENATION
-, *, / → always tries to CONVERT to number first
*/

// -------------------------------------------

/*
let str = "13"
console.log(Number(str));
console.log(parseInt(str));
console.log(parseFloat("3.14"));
console.log(String(42));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("csw"));

let userInput = "5";
let total = 10 + Number(userInput);
let  bug = 10 + userInput;
*/

/*
Always Number(input) when reading from forms/prompts — input is always a string.
Falsy values: 0, "", null, undefined, NaN, false → everything else is truthy.
*/

// -------------------------------------------

/*
console.log(5 == "5");
console.log(5 === "5");
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(NaN === NaN); // // false !! (NaN is never equal to anything, even itself)
*/

// -------------------------------------------

/*
console.log(typeof []);     // object
console.log([] == false);   // true
console.log([] + []);
console.log([] + {});
console.log({} + []);       
console.log(1 < 2 < 3);     // true
console.log(3 > 2 > 1);     // false
*/

// -------------------------------------------

/*
// Stack (primitives) - copied by VALUE
let a = 10;
let b = a;
b = 20;
console.log(a, b); //  10 20 (a unaffected)

// Heap (objects) - copied by REFERENCE
let obj1 = { val : 10};
let obj2 = obj1;
obj2.val = 20;
console.log(obj1.val, obj2.val);  // 20 20 (both changed! same object in memory)

*/

// -------------------------------------------

/*
let name = " Hello World ";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(0, 5));
console.log(name.indexOf("World"));
console.log(name.includes("World"));
console.log(name.replace("World", "JS"));
console.log(name.split(" "));
console.log(name.trim());
console.log(`My name is ${name}`);
console.log(name.split("").reverse().join(""));
*/

// -------------------------------------------

// console.log(Math.round(4.6));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.max(10, 20, 30));
// console.log(Math.min(10, 20, 30));

// let number = Math.floor(Math.random() * 10) + 1;
// console.log(number);

// -------------------------------------------

// const now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());

// -------------------------------------------

// const fruits = ["Apple", "Mango", "Banana"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// fruits.push("Grapes");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.unshift("Kivi");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// const marks = [75, 82, 90, 65, 88];
// console.log(marks[0]);
// console.log(marks[marks.length - 1]);
// console.log(marks.length);
// marks.push(95);
// console.log(marks);
// marks.pop();
// console.log(marks);

// -------------------------------------------

// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers.includes(30));
// console.log(numbers.indexOf(40));
// console.log(numbers.slice(1, 4));

// const names = ["A", "B", "C"];
// console.log(names.join(", "));

// const subjects = ["Java", "Python", "Cloud", "DSA"];
// subjects.push("Web Dev");
// console.log(subjects);
// const indexPython = subjects.indexOf("Python");
// if(indexPython !== -1) {
//     subjects.splice(indexPython, 1);
// }
// console.log(subjects);
// console.log(subjects.includes("DSA"));
// console.log(subjects.indexOf("Cloud"));
// console.log(subjects.toString());

// -------------------------------------------

// const student = {
//     name : "csw", 
//     age : 19, 
//     branch : "CSE",
//     marks : 78
// };
// console.log(student.name);
// console.log(student.age);
// console.log(student["branch"]);
// student.marks = 93;
// student.city = "kop";
// console.log(student);

// const product = {
//     name : "soap",
//     price : 50,
//     category : "Skin",
//     quantity : 20,
// };
// totalVal = product.price * product.quantity;
// console.log(totalVal);

// -------------------------------------------

// const student = {
//     name : "csw",
//     address : {
//         city: "kop",
//         state: "maharashtra"
//     }
// };
// console.log(student.address.city);
// console.log(student.address.state);

// Array inside object
// ------------->
// const student = {
//     name : "csw",
//     subjects : ["Java", "DSA", "Cloud"]
// };
// console.log(student.subjects[0]);

// objects inside Array
// ------------->
// const student = [
//     { name: "A", marks: 90}, 
//     { name: "B", marks: 95},
//     { name: "C", marks: 92}
// ];
// console.log(student[1].marks);

// -------------------------------------------

// const { name, age } = student;
// console.log(name);
// console.log(age);


// const user = {
//     name: "csw",
//     age: 19
// };
// const jsonData = JSON.stringify(user);
// console.log(jsonData);

// const originalData = JSON.parse(jsonData);
// console.log(originalData.name);

// -------------------------------------------

// Function
// function greet() {
//     console.log("Hello");
// }
// greet();

// Parameter
// function greet(name) {
//     console.log(`Hello ${name}`);
// }
// greet("csw");

// Return 
// function add(a, b){
//     return a + b;
// }
// let result = add(10, 20);
// console.log(result);

// -------------------------------------------

// const student = {
//     name : "csw",
//     marks : 93,
//     display : function() {
//         console.log(this.name);
//         console.log(this.marks);
//     }
// };
// student.display();

// const calculator = {
//     a: 10,
//     b: 20,
//     add: function() {
//         return this.a + this.b;
//     },
//     subtract: function() {
//         return this.a - this.b;
//     },
//     multiply: function() {
//         return this.a * this.b;
//     },
//     divide: function() {
//         return this.a / this.b;
//     }
// }
// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());

// -------------------------------------------

// global

// let name = "csw"
// function greet() {
//     console.log(name);
// }
// greet();
// console.log(name);


// local

// function test() {
//     let age = 19;
//     console.log(age);
    
// }
// test();
// console.log(age); //--> This prodece error cause it declared locally

// let college = "DYPCET"
// function studentDetails() {
//     let name = "csw";
//     console.log(college);
//     console.log(name);
// }
// studentDetails();

// -------------------------------------------

// if(true) {
//     let x = 20;
//     // var x = 20;
//     const y = 15;

//     console.log(x);
//     console.log(y);
// }
// // console.log(x);

// -------------------------------------------

// const user = {
//     name: "csw",
//     greet: function() {
//         console.log(this.name);
//     }
// };
// user.greet();

// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(10, 20));

// const add = (a, b) => a + b;
// console.log(add(10, 20));

// function square(number) {
//     return number*number;
// }
// console.log(square(5));

// const square = (num) => num * num;
// console.log(square(5));

// const multiply = (a, b) => a * b;
// console.log(multiply(4, 5));

// function multiply(a, b) {
//     return a *b;
// }
// console.log(multiply(4, 5));

// -------------------------------------------

// (function (){
//     console.log("program started");
// })();

// (function() {
//     let number = "12345";
//     console.log(number);
// })();

// -------------------------------------------

// function one() {
//     console.log("one");
// }
// function two() {
//     one();
//     console.log("two");
// }
// two();

// -------------------------------------------

// let marks = 75;

// if (marks >= 90 && marks <= 100) {
//     console.log("A");
// } else if (marks >= 75 && marks <= 89) {
//     console.log("B");
// } else if (marks >= 60 && marks <= 74) {
//     console.log("C");
// } else if (marks >= 40 && marks <= 59) {
//     console.log("D");
// } else if (marks < 40 && marks >= 0) {
//     console.log("Fail");
// } else {
//     console.log("Invalid marks");
// }

// -------------------------------------------

// for(let i = 1; i <= 20; i++) {
//     console.log(i);
// }
// for(let i = 20; i >= 1; i--){
//     console.log(i);
// }

// for(let i = 1; i <= 50; i++) {
//     if(i % 3 == 0) {
//         console.log(i);
//     }
// }

// for(let i = 0; i < 51; i++){
//     if( i == 17) break;
//     console.log(i);
// }

// -------------------------------------------

// let  i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while( i <= 5);

// -------------------------------------------

// const number = [10, 20, 30];

// for(let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }

// number.forEach(function(number){
//     console.log(number);
// });

// number.forEach((number) => {
//     console.log(number);
// });

// number.forEach(number => console.log(number));

// -------------------------------------------

// const student = [
//     { name: "A", marks: 80},
//     { name: "B", marks: 90},
//     { name: "C", marks: 70}
// ];
// student.forEach(student => {
//     console.log(student.name);
//     console.log(student.marks);

// });
// // student.forEach(student => {
// //     console.log(student.marks);
// // });

// const product = [
//     { name: "Laptop", price: 50000}, 
//     { name: "Mouse", price: 1000},
//     { name: "KeyBoard", price: 2000}
// ];
// product.forEach(product => {
//     console.log(product.name);
// });
// product.forEach(product => {
//     console.log(product.price);
// });

// -------------------------------------------

// filter -> Select elements that satisfy a condition.

// const numbers = [10, 15, 20, 25, 30];
// const result = numbers.filter(numbers => numbers > 20);
// console.log(result);

// map -> Transform every element.

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(numbers => numbers * 2);
// console.log(doubled);

// reduce -> Reduce an array into one final value.

// const numbers = [10, 20, 30, 40];
// const total = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0);
// console.log(total);

// -------------------------------------------

// const products = [
//     { name: "Laptop", price: 50000, category: "electronics"},
//     { name: "Mouse", price: 1000, category: "electronics"},
//     { name: "KeyBoard", price: 2000, category: "electronics"}
// ];

// const electronics = products.filter(
//     product => product.category === "electronics"
// );
// console.log("Electronics:", electronics);

// const names = products.map(
//     product => product.name
// );
// console.log("Names:", names);

// const total = products.reduce(
//     (sum, product) => sum + product.price,
//     0
// );
// console.log("Total Price:", total);

// const expensiveProducts = products
//     .filter(product => product.price > 1000)
//     .map(product => product.name);

// console.log("Expensive Products:", expensiveProducts);

// -------------------------------------------

const students = [
    {
        name: "Shravan",
        age: 20,
        marks: 96,
        branch: "CSE"
    },
    {
        name: "Aditya",
        age: 21,
        marks: 65,
        branch: "Medical"
    },
    {
        name: "Samarth",
        age: 22,
        marks: 78,
        branch: "IT"
    },
    {
        name: "Vishu",
        age: 23,
        marks: 79,
        branch: "CSE-CS"
    },
    {
        name: "sahil",
        age: 24,
        marks: 78,
        branch: "CSE-ALML",
    }
];

// students.forEach(student => {
//     console.log("student name:",student.name);
//     console.log("Student branch:", student.branch);
// });

// let TMarks = 0;
// students.forEach(function(student){
//     TMarks += student.marks;
// });
// console.log("Total Marks:", TMarks);

// const topStudents = students.filter(student => student.marks > 80);
// console.log("Top Students:",topStudents);

// const topStudentNames = students
//     .filter(student => student.marks > 80)
//     .map(student => student.name);
// console.log("Top student name:",topStudentNames);

// const studentNames = students.map(student => student.name);
// console.log("Student names:",studentNames);

// const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
// console.log("Total Marks:", totalMarks);

// const averageMarks = totalMarks / students.length;
// console.log("Average Marks:", averageMarks);

// const cseStudents = students.filter(student => student.branch === "CSE");
// console.log("CSE students:",cseStudents);

// const cseRelated = students.filter(student => student.branch.includes("CSE"));
// console.log("CSE related students:",cseRelated);

// const updateStudents = students.map(student => {
//     return {
//         ...student,
//         marks: student.marks + 5,
//         age: student.age + 1
//     };
// });
// console.log("Updated Students:",updateStudents);

// const highestMarks = students.reduce((max, student) => {
//     return student.marks > max ? student.marks : max;
// }, 0);
// console.log("Highest Marks:", highestMarks);

// const topStudent = students.reduce((maxStudent, student) => {
//     return student.marks > maxStudent.marks ? student : maxStudent;
// });
// console.log("Top Student:", topStudent);

// function getGrade(marks) {
//     if(marks >= 90 && marks <= 100) {
//         return "A";
//     } else if(marks >= 75 && marks <= 89) {
//         return "B";
//     } else if(marks >= 60 && marks <= 74) {
//         return "C";
//     } else if(marks >= 40 && marks <= 59) {
//         return "D";
//     } else if(marks >= 0 && marks < 40) {
//         return "F";
//     } else {
//         return "Invalid Marks";
//     }
// }

// const gradeStudents = students.map(student => {
//     return {
//         ...student,
//         grade: getGrade(student.marks)
//     };
// });
// console.log("Grades of students:",gradeStudents);
