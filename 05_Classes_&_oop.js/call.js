function Setusername(username) {
    this.username = username
}

function createUser(username, email, password) {
    Setusername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("abc", "abc@gmail.com", "123")
console.log(chai);