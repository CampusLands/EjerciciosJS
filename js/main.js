import contrasenaValida from "./modules/contrasena.js"

let opc = undefined;
do{
    let data = prompt("Ingrese la contraseña: ")
    console.log(contrasenaValida(data));
    opc = Number(prompt(`1. Repetir la validacion\n0. Terminar`))
}while(opc)