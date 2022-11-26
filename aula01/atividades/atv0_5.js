//ex.1)

const num = 10
const num1 = 20
const num2 = 30

const media = (num + num1 + num2) / 3

// alert(media)

//ex.2)
const nome = 'Jose'
const salario = 2000
const novoSalario = salario * 1.1

// alert(`O novo salario de ${nome} é ${salario})

//ex 3

const a = 10
const b = 2

let c = 0
if (a === b) {
    c = a + b
} else if (a !== b) {
    c = a * b
}

// alert(c)

//ex 4

let produto = 1000
let total = null
let parcelas = null

let qntParc = 3

// 3x 10%
//5x 20%

if(qntParc == 3){
    total = produto * 1.1
    parcelas = total / qntParc
}else if(qntParc == 5){
    total = produto * 1.2
    parcelas = total / qntParc
}else{
    alert('Defina parcelamento em 3 ou 5')
}
alert(`
    Valor inicial ${produto}
    Valor Parcela ${parcelas}
    Numero de parcelas ${qntParc}
    TOTAL: ${total}
`)

//ex 5 
let nome1 = 'João'

let nota1Mtm = 10
let nota2Mtm = 10
let nota3Mtm = 8.5
let media1 = (nota1Mtm + nota2Mtm + nota3Mtm) / 3

let aprovado = ''
if (media1 >= 8) {
    aprovado = `João foi aprovado com media ${media1}`
} else if (media1 <= 8) {
    aprovado = `João foi reprovado com media ${media1}`
}
alert(aprovado)