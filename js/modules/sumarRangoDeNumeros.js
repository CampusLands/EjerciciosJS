export const sumarRango = (numeroInicial, numeroFinal)=>{
    let resultado = 0
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        if(numeroInicial == numeroFinal) return 0
        resultado += i
    }
    return resultado;
}