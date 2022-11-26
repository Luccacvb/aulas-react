//ex.6)

let alturas = [1.50, 1.52, 1.63, 1.68, 1.83, 1.85, 1.96, 1.94, 1.75, 1.63, 1.74, 1.98, 1.99, 1.72, 1.70]

const maiorAltura = Math.max(...alturas)
const menorAltura = Math.min(...alturas)

let mediaAlturas = 0
for (let i = 0; i < alturas.length; i++) {
    mediaAlturas += (alturas[i] / alturas.length)
}

const nAlturas = alturas.filter(alturas => alturas > 1.81).length


alert(`
    A maior altura do grupo é ${maiorAltura}
    A menor altura do grupo é ${menorAltura}
    A média de altura do grupo é ${mediaAlturas.toFixed(2)}
    O número de pessoas com mais de 1.81 de altura é ${nAlturas} pessoas
    `)

//ex.7 & 8)

const otimo = [15, 16, 17, 19, 20]
const bom = [22, 26, 27, 29, 25]
const regular = [30, 35, 37, 39, 42]

let mediaOtimo = 0
for (let i = 0; i < otimo.length; i++) {
    mediaOtimo += otimo[i] / otimo.length;

}

const totalRegular = regular.length

let total = otimo.concat(bom).concat(regular).length
let count = 0
for (let i = 0; i < bom.length; i++) {
    count++
    totalPorcentBom = (count * 100 / total).toFixed(2) + '%'
}

alert(`
    A média das idades das pessoas que responderam ótimo é ${mediaOtimo} anos
    A quantidade de pessoas que responderam regular é ${totalRegular} pessoas
    A porcentagem de pessoas que responderam bom entre todos os espectadores analisados é ${totalPorcentBom}
`)

//ex.9)

const num = [1, 5, 7, 6, 8, 11, 10, 13, 15, 16, 18, 22, 23, 27, 32]

const numPar = num.filter(num => num % 2 === 0)
const somaPar = (soma, x) => soma + x;
const totalPar = numPar.reduce(somaPar);

numPrimo = num.filter((number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false
    }
    return true
})
const somaPrimo = (soma, x) => soma + x
const totalPrimo = numPrimo.reduce(somaPrimo)

alert(`
    A soma dos numeros pares é ${totalPar}
    A soma dos numeros primos é ${totalPrimo}
`)

//ex.10)

const idadeHomens = [20, 25, 27, 28, 30]
const pesoHomens = [78, 74, 81, 72, 71]
const idadeMulheres = [18, 19, 20, 21, 24]
const pesoMulheres = [63, 65, 67, 72, 69]

const totalHomens = idadeHomens.length
const totalMulheres = idadeMulheres.length

let idadeH = 0
for (let i = 0; i < idadeHomens.length; i++) {
    idadeH += idadeHomens[i] / idadeHomens.length
}

let pesoM = 0
for (let i = 0; i < pesoMulheres.length; i++) {
    pesoM += pesoMulheres[i] / pesoMulheres.length
}

alert(`
    Total de homens é ${totalHomens}
    Total de mulheres é ${totalMulheres}
    Média de idade dos homens é ${idadeH} anos
    Média do peso das mulheres é ${pesoM}Kg
`)

//ex.10)

let idades = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
let pesos = [55, 60, 65, 70, 75, 77, 78, 79, 80, 80]
let sexos = ['m', 'f', 'm', 'f', 'm', 'm', 'f', 'm', 'f', 'm']

let totalMasc = 0
totalFem = 0

for (let i = 0; i < idades.length; i++) {
    const idade = idades[i]
    const peso = pesos[i]
    const sexo = sexos[i]

    if (sexo == 'm') {
        totalMasc++
    }

    if (sexo == 'f') {
        totalFem++
    }
}
alert(totalMasc)
