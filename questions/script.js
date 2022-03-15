function init(){
    const personLogin = document.querySelector(".js-login");
    const buttonSubmit = document.querySelector(".js-login-button");
    const workingArea = document.querySelector(".js-password-area");

    function CheckPerson() {
        person = personLogin.value;
        if (person === "ADMIN"){
            ShowPassword()
        } else if (person) {
            alert("NOPE") 
        }
        else {
            alert("Отмена")
        }
    };

    function ShowPassword(){
        const passWord = document.createElement('input')
        passWord.type = "text";
        passWord.placeholder = "password";
        workingArea.appendChild(passWord)

        const passwordButton = document.createElement('button');
        passwordButton.textContent = "submit";
        workingArea.appendChild(passwordButton);
        passwordButton.onclick = CheckPassword;
    }

    function CheckPassword() {
        password = prompt("Пароль?")
        // if (password === "TTT"){
        //     alert("Привет 8)") 
        // } else if (password) {
        //     alert("NOPE") 
        // }
        // else {
        //     alert("Отмена")
        // }
    };

    buttonSubmit.onclick = CheckPerson
    

}
window.onload = init