
export function numAsteriscos(array){

    let totalAsteriscos = 0;
   for (let i = 0; i < array.length; i++) {
    if (array[i] === "*") {
        totalAsteriscos += 1
    }
   }

   return totalAsteriscos
}