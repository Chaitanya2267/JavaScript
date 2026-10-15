
const mySym = Symbol("key1")

const JsUser = {
    name : "chaitanya", 
    "full name" : "chaitanya waychal",
    [mySym] : "mykey1", 
    age: 19,
    location: "kop", 
    email : "chaitanya@gmail.com",
    isLoggedIn : true,
    lastLoginDays: ["Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "chaitanya@in.com"
// Object.freeze(JsUser) 
JsUser.email = "chaitanya@microsoft.com"
// console.log(JsUser.email)

// JsUser.greeting = function(){
//     console.log("Hello js user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello js user, ${this["full name"]}`);
// }
// JsUser.greeting();
// JsUser.greetingTwo();

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "chaitanya",
            lastname: "waychal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const course = {
    coursename: "js",
    price: "000",
    courseInstructor: "csw"
}

const {courseInstructor: instructor} = course
console.log(instructor)
// Take courseInstructor from course and store it in a new variable called instructor.