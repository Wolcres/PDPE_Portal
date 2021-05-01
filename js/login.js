function inicio(){
    const dataUser = JSON.parse(localStorage.getItem("registro"))
    const correo = document.getElementById("correo").value
    const password = document.getElementById("password").value

    if(correo == dataUser.email){
        password == dataUser.password ? redirect() : alert("contrasena incorrecta")
    }else alert("correo no registrado")
}
const redirect = () => {
    window.open("./../html/api.html", '_self')
    /* window.history.push("api.html") */
}