export const distancia = (texto, texto2)=>{
    // let resto = 0;
    // let longitudMaxima = Math.max(texto.length, texto2.length);

    // for (let i = 0; i < longitudMaxima; i++) {
    //     if (texto[i] !== texto2[i]) {
    //         resto += 1;
    //     }
    // }
    // return resto;

    let listaCaracteres = [texto, texto2]
    let resto = 0
    if(texto.length != texto2.length){
            let lista = [texto.length, texto2.length]
            let numeroMayor = Math.max(...lista);
            let numeroMenor = Math.min(...lista);
            let indiceMayor = lista.indexOf(numeroMayor);
            let indiceMenor = lista.indexOf(numeroMenor);
            resto = lista[indiceMayor] - lista[indiceMenor]
            listaCaracteres[indiceMayor] = listaCaracteres[indiceMayor].slice(0, -resto);
            for (let i = 0; i < listaCaracteres[indiceMayor].length; i++) {
                if(listaCaracteres[indiceMayor][i] != listaCaracteres[indiceMenor][i]){
                    resto +=1
                }
            }
    }else{
        for (let i = 0; i < listaCaracteres[0].length; i++) {
            if(listaCaracteres[0][i] != listaCaracteres[1][i]){
                resto +=1
            }
        }
   }
    return resto
}