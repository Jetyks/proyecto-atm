const loginButton = document.getElementById("loginButton");
const users = [
    { usuario: "MAURO", fullName: "Mauro Enrique Cano Soto", contrasena: 2406, montoInicial: 2400},
    { usuario: "ANA", fullName: "Ana Carolina Reyes Retana", contrasena: 1234, montoInicial: 1500},
    { usuario: "ENRIQUE", fullName: "Enrique Peña Nieto",contrasena: 1111, montoInicial: 1100},
    { usuario: "ROMAN", fullName: "Angel Roman Gutierrez Ortiz",contrasena: 6020, montoInicial: 900}
]

var h4Saldo  = document.getElementById ("text-saldo-actual");
let h4MontoIngresar = "Que monto deseas ingresar?";
let botonIngresar = document.getElementById("ingresar");
let botonRetirar = document.getElementById("retirar")

function validarCredenciales (){
    console.log("ejecutadovich pa");
    
    const inputUser = document.getElementById("inputUser");
    const inputPass = document.getElementById("inputPass");
    const responseUser = inputUser.value.toUpperCase();
    console.log(responseUser);
    const responsePass = Number(inputPass.value);
    console.log(responsePass);

    /* const nameUserContainer = document.getElementById("nameUser");
    const nameUser = users[i].fullName; */
    

    for (let i = 0; i < users.length; i++){
        if(responseUser === users[i].usuario && responsePass === users[i].contrasena){
            alert("Bienvenid@ " + users[i].fullName);
            window.location.href = "account-logged.html";
            return;
        }
    }
    alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    
}

function ingresarDinero() {
   if (h4Saldo.textContent != "Que monto deseas ingresar?") {
    h4Saldo.textContent = h4MontoIngresar;
    console.log(botonIngresar.textContent);
    botonIngresar.textContent = "Regresar";
    botonRetirar.textContent = "Confirmar";
    /* botonIngresar.textContent = "caca"; */
    /* console.log("simon es diferente pa"); */
    console.log(h4Saldo.textContent);
   } else if (h4Saldo.textContent == "Que monto deseas ingresar?"){
        window.location.href = "account-logged.html";
        console.log("casa");
        
   }

    
    
    
    
    /* document.getElementById("ingresar").style.display = "none"; */
    /* document.getElementById("text-saldo-actual").style.display = "none"; */
    /* document.getElementById("retirar").style.display = "none"; */
    
}
loginButton.addEventListener("click", validarCredenciales);