window.onload = inicio;
function inicio(){
    const formloginUI = document.querySelector('#forming');

    formloginUI.addEventListener('submit',(e) =>{
        e.preventDefault();
        var validacion = localStorage.getItem(localStorage.key(0));
        let userUI = document.querySelector('#user').value;
        let pwUI = document.querySelector('#password').value;
        if(userUI.length == 0 || pwUI.length == 0){
            window.alert("Por favor, digite las credenciales");
        }
        else if(validacion.includes(userUI) && validacion.includes(pwUI)){
            formloginUI.reset(); 
            window.open("galeria.html", "_self");  
        }
        else{
            window.alert("Credenciales incorrectas!");
        }
    });
}