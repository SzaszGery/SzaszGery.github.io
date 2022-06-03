const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Vendég" && password === "Vendég@1234") {
        alert("Sikeresen belépett a "+username+" fiókkal.");
        location.replace("https://szaszgery.github.io/index-logged-in.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})