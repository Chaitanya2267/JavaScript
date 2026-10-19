class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}csw`
    }
    set password(value) {
        // this._password = value.toUpperCase();
        this._password = value
    }
}
const csw = new User("csw@gmail.com" ,"abc")
// console.log(csw.password);
console.log(csw.email);