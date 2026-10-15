// function sayMyName() {
//     console.log("c");
//     console.log("s");
//     console.log("w");
// }

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2); // displays the value
//     return number1 + number2; // gives the value back so you can store/use it.
// }
// console.log(addTwoNumbers(3, 4));

// function loginUserMessage(username = "sam") {
//     return `${username} just looged in`;
// }
// console.log(loginUserMessage("csw"))

// function loginUserMessage(username) {
//     if (!username) {
//         console.log("Please enter a username: ");
//         return;
//     }
//     return `${username} just logged in`;
// }

// function calculateCartPrice(val1, val2, ...num1) {
//     return num1;
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "hitesh",
//     price: 199
// };
handleObject({
    username: "sam", 
    price: 399
});
// Objects can be passed as function arguments

// function returnSecondValue(getArray) {
//     return getArray[1];
// }
// returnSecondValue([200, 400, 500, 1000]);
// console.log(returnSecondValue());
