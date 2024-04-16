import prompt from "prompt-sync"
import {sumarRango} from "./modules/sumarRangoDeNumeros.js"
let input = prompt();
let numeroInicial = input("Ingrese el numero 1: ")
let numeroFinal = input("Ingrese el numero 2: ")
console.log(sumarRango(Number(numeroInicial), Number(numeroFinal)));
