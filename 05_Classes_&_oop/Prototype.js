// let myName = "csw   "
// console.log(myName.trim().length);

let myHeros = ["thor, spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.csw = function() {
    console.log(`csw is present in all objects`);
}

Array.prototype.heycsw = function() {
    console.log(`csw says hello`);
}

// heroPower.csw()
// myHeros.csw()
// myHeros.heycsw()
// heroPower.heycsw()

const user = {
    name: "csw",
    email: "csw@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment', 
    fullTime : true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = user
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "csw   "
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True lengthh is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"javascript".trueLength()
"java   ".trueLength()