import prompt from "prompt-sync"
import contrasenaValida from "./modules/contrasena.js"
let input = prompt();
let opc = undefined;
do{
    let data = input("Ingrese la contraseña: ")
    console.log(contrasenaValida(data));
    console.log(`1. Repetir la validacion\n0. Terminar`);
    opc = Number(input())
}while(opc)