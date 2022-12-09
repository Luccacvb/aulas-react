//ex2) Crie uma função que receba um array de números (crie uma segunda função para validar os dados dentro do array) e
//depois calcule a soma de todos os valores dentro do array.
//Execute a função mostrando na tela o seguinte texto: 'A soma dos valores do array é ${(resultado)}'.

function somarNumeros(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (isNumerico(element)) {
            total += element
        }
        else {
            return 'Erro'
        }

    }
    return total
}

function isNumerico(valor) {
    if (typeof valor === 'number') {
        return true
    } else {
        return false
    }
}

const numeros = [10, 20, 30, 40]
let resultado = somarNumeros(numeros)

alert(`A soma dos valores do array é ${(resultado)}`)

//ex3) Crie uma função que receba duas strings como parâmetro, primeiro nome e segundo nome,
//em seguida retorne o nome completo do indivíduo.

function nomeCompleto(primeiroNome, segundoNome) {
    return `${primeiroNome} ${segundoNome}`
}

alert(`O nome completo é ${nomeCompleto('Lucca', 'Vilas Boas')}`)

//ex4) Crie uma função que receba um string como parâmetro  e execute um "windows.prompt" com o texto recebido como parâmetro,
//e em seguida retorne o valor que o usuário digitou.

function newPrompt(alert) {
    let valor = prompt(alert)
    return valor
}
alert(newPrompt('Digite seu nome'))

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

function verificarItemIsolado(letras) {
    let itemIsolado = null

    letras.forEach(letra => {
        let numeroRepetido = 0;

        letras.forEach(letraComparacao => {
            if (letra === letraComparacao) {
                numeroRepetido++
            }
        });

        if (numeroRepetido === 1) {
            return itemIsolado = letra
        }


    });

    if (itemIsolado) {

        return itemIsolado
    } else {
        return 'Não existe itens isolados no array '
    }
}

let vetor = ["a", "b", "a", "a", "c", "b"]
alert(verificarItemIsolado(vetor))
