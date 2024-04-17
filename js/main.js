import prompt from "prompt-sync"
import {numAsteriscos} from "./modules/numeroDeAsteriscoEnUnArreglo.js"
let input = prompt();
let array = input("Ingrese varios datos separados por espacios: ");
let arrayConvertido = array.split(" ")
console.log(numAsteriscos(arrayConvertido));


