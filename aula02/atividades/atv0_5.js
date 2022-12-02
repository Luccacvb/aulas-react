//ex1) Crie uma função que receba dois números como parâmetro, retorne a soma dos valores,
//em seguida execute a função mostrando na tela o seguinte texto: 'A soma dos valores é ${(resultado)}'.

function somarNumero(n1, n2) {
    let resultado = 0
    resultado = n1 + n2
    return resultado
}
let soma = somarNumero(5, 5)
alert(`A soma dos valores é: ${soma}`)

//ex2) Crie uma função que receba um array de números (crie uma segunda função para validar os dados dentro do array) e
//depois calcule a soma de todos os valores dentro do array.
//Execute a função mostrando na tela o seguinte texto: 'A soma dos valores do array é ${(resultado)}'.

function somaArray(array) {
    let total = 0
    if (validaArray(array)) {
        for (const value of array) {
            total += value
        }
    }

    return total
}

function validaArray(array) {
    return array.every(element => {
        return typeof element === 'number'
    })
}

var numeros = [1, 2, 3, 4, 5, 6,]
alert(`A soma dos valores do array é: ${somaArray(numeros)}`)

//ex3) Crie uma função que receba duas strings como parâmetro, primeiro nome e segundo nome,
//em seguida retorne o nome completo do indivíduo.

function nomeCompleto(primeiroNome, segundoNome) {
    const nome = `${primeiroNome} ${segundoNome}`
    return nome
}

const meuNome = nomeCompleto('Lucca', 'Vilas Boas')
alert(`O nome completo é: ${meuNome}`)

//ex4) Crie uma função que receba um string como parâmetro  e execute um "windows.prompt" com o texto recebido como parâmetro,
//e em seguida retorne o valor que o usuário digitou.

function meuPrompt(string) {
    let nome = prompt(string)
    if (nome != null) {
        return nome ? `Ola ${nome}` : ''
    }
}

alert(meuPrompt(`Digite seu nome`))

//ex5)Crie uma função que receba um array de números (Valide os dados dentro do array, reaproveite a função criada no exercício 1)
// e depois calcule a média de todos os valores dentro do array. 
//Execute a função mostrando na tela o seguinte texto: 'A média dos valores do array é ${(resultado)}'.

function mediaArray(array) {
    let total = 0
    if (validaArray(array)) {
        for (const value of array) {
            total += value / array.length
        }
    }
    return total
}

let numArray = [10, 20, 30, 40, 50, 60, 70,]
alert(`A média dos valores do array é: ${mediaArray(numArray)}`)

//ex6) Neste exercício, temos um array composto de letras repetidas e uma letra isolada. Por exemplo, temos um array chamado vetor:
// let vetor = ["a", "b", "a", "a", "c", "b"]
// Aqui, temos:
//  vetor[0] = "a"; 
//  vetor[1] = "b";
//  vetor[2] = "a";
//  vetor[3] = "a";
//  vetor[4] = "c";
//  vetor[5] = "b";
// Sabemos que a única letra que não possui repetição está na posição [4], elemento “c”. Então, crie uma função que retornar este elemento.


let valor = 0

function ultimaString(array) {

    for (let i = 0; i < array.length; i++) {
        valor = array.sort()
        valor = array[i]
    }
    return valor
}

let vetor = ["a", "b", "a", "a", "c", "b"]

alert(ultimaString(vetor))
