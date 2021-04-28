/**
 * Passed the context user inside "bind" for passed method references
 * @param {*} ok -- function reference passed 
 * @param {*} fail -- function reference passed 
 */
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    }

}
//Passed the context user inside "bind" for passed method references
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));