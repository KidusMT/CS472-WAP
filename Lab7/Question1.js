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
askPassword(()=>user.loginOk.call(user), ()=>user.loginFail.call(user));
askPassword(()=>user.loginOk.apply(user), ()=>user.loginFail.apply(user));

// Reason why it didn't work? with the below code is:
// (old)    askPassword(user.loginOk, user.loginFail);
// is because the "this" statement called both in "loginOk" and "loginFail"
// uses this reference which will return error when being passed as a reference
// and called in a different execution environment. Therefore, we need to 
// pass in the "user" object so the methods will this statement will be 
// found in the new environment as well.