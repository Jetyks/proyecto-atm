
var infoUsuario = localStorage.getItem("infoUsuarioActivo");

// Comprobacion de local storage en otras paginas//
if (infoUsuario) {
    var infoUsuarioLogged = JSON.parse(infoUsuario);
    console.log(infoUsuarioLogged[0]);
} else {
    console.log("No se encontró ningún valor en localStorage con la clave 'infoUsuarioActivo'");
}

const nombreUsuario = document.getElementById("nameUser");
let nombreUsuarioActivo = infoUsuarioLogged[0];
nombreUsuario.innerText = nombreUsuarioActivo;

var mainCard = document.getElementById("main-card");
var ingresarCard = document.getElementById("ingresar-card");
var retirarCard = document.getElementById("retirar-card");
var regresarButton = document.getElementById("regresar-button");

const montoInicialContainer = document.getElementById("monto-inicial");
let montoActual = infoUsuarioLogged[1];
montoInicialContainer.innerText = montoActual;
console.log(montoInicialContainer.innerText);


var h4Saldo  = document.getElementById ("text-saldo-actual");
let h4MontoIngresar = "Que monto deseas ingresar?";
let botonIngresar = document.getElementById("ingresar");
let botonRetirar = document.getElementById("retirar")
const confirmarButton = document.getElementById("confirmar-button");


function ingresarDinero() {
    console.log("sirve ingresar");
    ingresarCard.style.display = "flex";
    mainCard.style.display = "none";
    retirarCard.style.display = "none";
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
        alert("El monto minimo para depositar es de $1");
        return;
    }

    if(resultadoSuma<=990 && responseNumber > 0){
        alert("Movimiento realizado con exito. Tu saldo actual es de: $" + resultadoSuma);
        montoActual = resultadoSuma;
        console.log(montoActual);
        montoInicialContainer.innerText = montoActual;
        return;
    }

    if (resultadoSuma>990) { 
        alert("No puedes tener mas de $990 en tu cuenta, ingresa una cantidad mas baja. Tu saldo es de: $" + montoActual);
        return;
    }

    
   }
   function restarDinero(){
    const inputNumeroRetirar = document.getElementById("numero-retirar");
    const responseNumber = Number(inputNumeroRetirar.value);
    console.log(montoActual);
    console.log(responseNumber);
    let resultadoResta = montoActual - responseNumber;

    if(responseNumber <= 0){
        alert("El monto minimo para retirar es de $1");
        return;
    }

    if(resultadoResta>=10 && responseNumber>0){
        alert("Movimiento realizado con exito. Tu saldo actual es de: $" + resultadoResta);
        montoActual = resultadoResta;
        console.log(montoActual);
        montoInicialContainer.innerText = montoActual;
        return;
    }

    if (resultadoResta < 10) { 
        alert("No puedes tener menos de $10 en tu cuenta, ingresa una cantidad mas baja. Tu saldo es de: $" + montoActual);
        return;
    }

    
   }

   function regresar (){
    /* console.log("sirve"); */
    mainCard.style.display = "flex";
    ingresarCard.style.display = "none";
    retirarCard.style.display = "none";
   }

   