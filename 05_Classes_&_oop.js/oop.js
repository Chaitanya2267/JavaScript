const user = {
    username: "csw", 
    loginCount: 4, 
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails);
console.log(this);

function User(username, loginCount, islloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.islloggedIn = islloggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("cw", 43, true);
const userTwo = new User("wc", 43, false);
console.log(userOne.constructor);
