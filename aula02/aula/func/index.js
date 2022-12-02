function calcularMedia(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        total += element
    }
    let resultado = total / array.length
    return resultado
}

let idades = [10, 20, 30]

let calculo = calcularMedia(idades)

alert(calculo)
