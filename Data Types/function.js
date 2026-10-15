// function greet(name) {
//   return "Hello, " + name + "!";
// }
// console.log(greet("CSW"));

// function greet(name) {
//   console.log("Hello " + name);
// }
// greet("Alice");

// function add(a, b) {
//   return a + b;
// }
// let result = add(5, 20);
// console.log(result);

// Default Parameters
// function greet(name = "CSW") {
//   console.log("hello, " + name);
// }
// greet();
// greet("w");

// 1. Named Function
// function greet(){
//     return "hi";
// }
// console.log(greet());

// 2. Anonymous Function
// const greet1 = function() {
//     return "Hi there";
// };
// console.log(greet1());

// 3. Function Expression
// const add = function(a, b) {
//     return a + b;
// };
// console.log(add(4, 5));

// 4. Arrow Function
// const square = (n) => n * n;
// console.log(square(4));

// 5. Callback Function
function num(n, callback){
    return callback(n);
}
const double = (n) => n*2; console.log(num(5, double));
