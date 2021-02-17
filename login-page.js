
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "12345") {
        //alert("You havehave successfully logged in.");
        //location.reload();
        callBackFunc(successLogin);
    } else {
        callBackFunc(errorOnLogin);
    }
})

function callBackFunc(functionname) {
    functionname();
}

function errorOnLogin() {
    loginErrorMsg.style.opacity = 1;
}

function successLogin() {
	location.replace("ToDo.htm")
}