let loginSection = document.getElementsByClassName('login-section')[0];
let login = document.getElementsByClassName('login')[0];
let password = document.getElementsByClassName('password')[0];
let btnLogin = document.getElementsByClassName('login-btn')[0];
let loginPermision = document.getElementsByClassName('login-permision-box')[0];

const isLogin = () => {
    if (login.value !== "test" && password.value !== "test") {
        loginPermision.style.display = "flex";
    } else {
        if(localStorage.getItem('is-create') === "true") {
            loginSection.style.display = "none";
            getChoiceCharacterSection.style.display = "flex";
        } else {
            loginSection.style.display = "none";
            createCharacterSection.style.display = "flex";
            loginPermision.style.display = "none";
        } 
    }
}
btnLogin.addEventListener('click', isLogin);