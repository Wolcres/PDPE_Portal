//Funcion onload


function inicio() {
    let formregisterUI = document.getElementById("toast-message")
    let isPasswordAllowed = true;
    let userInput = document.getElementById("user").value
    let emailInput = document.getElementById("email").value
    let passwordInput = document.getElementById("password").value
    let passwordRepeatInput = document.getElementById("password-repeat").value

    const userToRegister = {
        username: userInput,
        email: emailInput,
        password: passwordInput,
        passwordRepeat: passwordRepeatInput,
    }

    isPasswordAllowed = validar_pw(userToRegister.password)

    if (isPasswordAllowed) {
        localStorage.setItem('registro', JSON.stringify(userToRegister));
    }
/* 
    isPasswordAllowed ? userToRegister.username ? userToRegister.email ? userToRegister.passwordRepeat ? localStorage.setItem('registro', JSON.stringify(userToRegister)) : null : null : null : null

    isPasswordAllowed === "puto" ? (true) : (false) */



    function validar_pw(pwUI) {
        //validacion pw
        var mays = false;
        var minus = false;
        var numr = false;
        var symb = false;
        if (pwUI.length >= 8) {
            for (var i = 0; i < pwUI.length; i++) {
                if (pwUI.charCodeAt(i) >= 65 && pwUI.charCodeAt(i) <= 90) {
                    mays = true;
                }
                else if (pwUI.charCodeAt(i) >= 97 && pwUI.charCodeAt(i) <= 122) {
                    minus = true;
                }
                else if (pwUI.charCodeAt(i) >= 48 && pwUI.charCodeAt(i) <= 57) {
                    numr = true;
                }
                else {
                    symb = true;
                }
            }
            if (mays == true && minus == true && numr == true && symb == true) {
                return true;
            }
        }
        return false;
        //validacion pw
    }


    /* formregisterUI.addEventListener('submit', (e) => {
        e.preventDefault();

        let userUI = document.querySelector('#user').value;
        let pwUI = document.querySelector('#password').value;
        let pwrpUI = document.querySelector('#password-repeat').value;
        let emailUI = document.querySelector('#email').value;





        if (userUI.length == 0 || pwUI.length == 0 || pwrpUI.length == 0 || emailUI.length == 0) {
            window.alert("Todos los caracteres son obligatorios!");
            formregisterUI.reset();
        }
        else if (pwUI != pwrpUI) {
            window.alert("Las contraseñas deben coincidir");
        }
        else if (validar_pw(pwUI) == false) {
            window.alert("Contraseña debe tener por lo menos 8 caracteres, 1 mayuscula, 1 minuscula, 1 simbolo, 1 número")
        }
        else {
            CrearUsuario(userUI, pwUI, pwrpUI, emailUI);
            GuardarDB();
            formregisterUI.reset();
            window.open("login.html", "_self");
        }
    }); */
}


