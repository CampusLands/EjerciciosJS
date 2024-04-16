import prompt from "prompt-sync"
import {distancia} from "./modules/distanciaEntreDosString.js"
let input = prompt();
let texto = input("Ingrese el texto 1: ");
let texto2 = input("Ingrese el texto 2: ");
console.log(distancia(texto, texto2));