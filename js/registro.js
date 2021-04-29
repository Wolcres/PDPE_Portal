//Funcion onload
window.onload = inicio;
        
function inicio(){
    const formregisterUI = document.querySelector('#form-ing');
    let arrayRegistro = [];

    const CrearUsuario = (user, pw, pwrp, email, number) => {
        let item = {
            user: user,
            pw:pw,
            pwrp:pwrp,
            email:email,
            number:number
        }   
        arrayRegistro.push(item);
        return item;
    }
    const GuardarDB = () =>{
        localStorage.setItem('registro',JSON.stringify(arrayRegistro));
    }
function validar_pw(pwUI){
    //validacion pw
    var mays = false;
    var minus = false;
    var numr = false;
    var symb = false;
    if(pwUI.length >= 8){
        for(var i = 0; i <pwUI.length;i++){
            if(pwUI.charCodeAt(i) >= 65 && pwUI.charCodeAt(i) <= 90){
                mays = true;
            }
            else if(pwUI.charCodeAt(i) >= 97 && pwUI.charCodeAt(i) <= 122){
                minus = true;
            }
            else if(pwUI.charCodeAt(i) >= 48 && pwUI.charCodeAt(i) <= 57){
                numr = true;
            }
            else{
                symb = true;
            }
        }
        if(mays == true && minus == true && numr == true && symb == true){
            return true;
        }
    }
    return false;
    //validacion pw
}


    formregisterUI.addEventListener('submit',(e) =>{
        e.preventDefault();

        let userUI = document.querySelector('#user').value;
        let pwUI = document.querySelector('#password').value;
        let pwrpUI = document.querySelector('#password-repeat').value;
        let emailUI = document.querySelector('#email').value;
        let numberUI = document.querySelector('#number').value;


        if(userUI.length == 0 || pwUI.length == 0 || pwrpUI.length == 0 || emailUI.length == 0 || isNaN(numberUI)) 
        {
            window.alert("Todos los caracteres son obligatorios!");
            formregisterUI.reset(); 
        }
        else if(pwUI != pwrpUI){
            window.alert("Las contraseñas deben coincidir");
        }
        else if(validar_pw(pwUI) == false){
            window.alert("Contraseña debe tener por lo menos 8 caracteres, 1 mayuscula, 1 minuscula, 1 simbolo, 1 número")   
        }
        else{
            CrearUsuario(userUI, pwUI, pwrpUI, emailUI,numberUI);
            GuardarDB();
            formregisterUI.reset(); 
            window.open("login.html", "_self");     
        }
    });
}


