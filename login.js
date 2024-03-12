let loginButton = document.getElementById("loginButton");
const users = [
    { usuario: "MAURO", fullName: "Mauro Enrique Cano Soto", contrasena: 2406, montoInicial: 900},
    { usuario: "ANA", fullName: "Ana Carolina Reyes Retana", contrasena: 1234, montoInicial: 430},
    { usuario: "ENRIQUE", fullName: "Enrique Peña Nieto",contrasena: 1111, montoInicial: 600},
    { usuario: "ROMAN", fullName: "Angel Roman Gutierrez Ortiz",contrasena: 6020, montoInicial: 420}
]



var mainCard = document.getElementById("main-card");
var ingresarCard = document.getElementById("ingresar-card");
var retirarCard = document.getElementById("retirar-card");
var regresarButton = document.getElementById("regresar-button");

const montoInicialContainer = document.getElementById("monto-inicial");
let montoActual = 300;
montoInicialContainer.innerText = montoActual;
console.log(montoInicialContainer.innerText);


loginButton.addEventListener("click", validarCredenciales);

var h4Saldo  = document.getElementById ("text-saldo-actual");
let h4MontoIngresar = "Que monto deseas ingresar?";
let botonIngresar = document.getElementById("ingresar");
let botonRetirar = document.getElementById("retirar")
const confirmarButton = document.getElementById("confirmar-button");

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
    console.log("sirve ingresar");
    ingresarCard.style.display = "flex";
    mainCard.style.display = "none";
    retirarCard.style.display = "none";
    
    
   /* if (h4Saldo.textContent != "Que monto deseas ingresar?") {
    h4Saldo.textContent = h4MontoIngresar;
    console.log(botonIngresar.textContent);
    botonIngresar.textContent = "Regresar";
    botonRetirar.textContent = "Confirmar"; */
    /* botonIngresar.textContent = "caca"; */
    /* console.log("simon es diferente pa"); */
    /* console.log(h4Saldo.textContent); */
  /*  } else if (h4Saldo.textContent == "Que monto deseas ingresar?"){
        window.location.href = "account-logged.html";
        console.log("casa");
        
   } */

   
   
}

function retirarDinero() {
    console.log("sirve retirar");
    ingresarCard.style.display = "none";
    mainCard.style.display = "none";
    retirarCard.style.display = "flex";
}

function añadirDinero(){
    const inputNumeroIngresar = document.getElementById("numero-ingresar");
    const responseNumber = Number(inputNumeroIngresar.value);
    console.log(montoActual)
    console.log( responseNumber);
    let resultadoSuma = responseNumber + montoActual;

    if(responseNumber<=0){
        console.log("El monto minimo para depositar es de $1");
        return;
    }

    if(resultadoSuma<=990 && responseNumber > 0){
        console.log("Movimiento realizado con exito. Tu saldo actual es de: $" + resultadoSuma);
        montoActual = resultadoSuma;
        console.log(montoActual);
        montoInicialContainer.innerText = montoActual;
        return;
    }

    if (resultadoSuma>990) { 
        console.log("No puedes tener mas de $990 en tu cuenta, ingresa una cantidad mas baja. Tu saldo es de: $" + montoActual);
        return;
    }

    
   }
   function restarDinero(){
    const inputNumeroRetirar = document.getElementById("numero-retirar");
    const responseNumber = Number(inputNumeroRetirar.value);
    console.log(montoActual);
    console.log(responseNumber);
    let resultadoResta = montoActual - responseNumber;

    if(responseNumber === 0){
        console.log("El monto minimo para retirar es de $1");
        return;
    }

    if(resultadoResta>=10 && responseNumber>0){
        console.log("Movimiento realizado con exito. Tu saldo actual es de: $" + resultadoResta);
        montoActual = resultadoResta;
        console.log(montoActual);
        montoInicialContainer.innerText = montoActual;
        return;
    }

    if (resultadoResta < 10) { 
        console.log("No puedes tener menos de $10 en tu cuenta, ingresa una cantidad mas baja. Tu saldo es de: $" + montoActual);
        return;
    }

    
   }

   function regresar (){
    console.log("sirve");
    mainCard.style.display = "flex";
    ingresarCard.style.display = "none";
    retirarCard.style.display = "none";
   }

   /* regresarButton.addEventListener("click", regresar); */
   /* confirmarButton.addEventListener("click", ); */
   