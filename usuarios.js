const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    validarCredenciales();

});

let loginButton = document.getElementById("loginButton");
const users = [
    { usuario: "MAURO", fullName: "Mauro Enrique Cano Soto", contrasena: 2406, montoInicial: 900},
    { usuario: "ANA", fullName: "Ana Carolina Reyes Retana", contrasena: 1234, montoInicial: 430},
    { usuario: "ENRIQUE", fullName: "Enrique Peña Nieto",contrasena: 1111, montoInicial: 600},
    { usuario: "ROMAN", fullName: "Angel Roman Gutierrez Ortiz",contrasena: 6020, montoInicial: 420}
]

function validarCredenciales (){
    
    const inputUser = document.getElementById("inputUser");
    const inputPass = document.getElementById("inputPass");
    const responseUser = inputUser.value.toUpperCase();
    console.log(responseUser);
    const responsePass = Number(inputPass.value);
    console.log(responsePass);

    
    for (let i = 0; i < users.length; i++){
        if(responseUser === users[i].usuario && responsePass === users[i].contrasena){
            alert("Bienvenid@ " + users[i].fullName);
            const usuarioActivo = users[i];
            const nombreUsuarioActivo = usuarioActivo.fullName;
            const usuarioActivoMontoInicial = usuarioActivo.montoInicial;
            console.log(usuarioActivo);
            console.log(nombreUsuarioActivo);
            console.log(usuarioActivoMontoInicial);

            const infoUsuarioActivo = [nombreUsuarioActivo, usuarioActivoMontoInicial];
            localStorage.setItem("infoUsuarioActivo",JSON.stringify(infoUsuarioActivo));
            if (infoUsuarioActivo) {
                console.log('El valor se almacenó correctamente:', infoUsuarioActivo);
            } else {
                console.log('Hubo un problema al almacenar el valor.');
            }
            window.location.href = "account-logged.html";
            return;
        }
    }
    alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    
}

