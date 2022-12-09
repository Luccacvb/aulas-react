let string = 'Texto'
let numero = 10
let array = [1, 2, 3, true, 'Teste']
let boolean = true
let funcao = () => { }

//object
// let pessoa = {
//     nome: 'Lucca'
// }
// let veiculo = {
//     cor: 'Vermelho',
//     marca: 'vw',
//     placa: 'mev-1234',
//     isLocado: true,
//     locatario: pessoa,
//     ligar: () => {
//         alert(`O veiculo com placa: ${veiculo.placa}, foi ligado pelo: ${veiculo.locatario.nome}`)
//     }
// }
// veiculo.ligar()

//Subir: Não pode passar do andar maximo 
//Descer: Não pode passar do 0

let elevador = {
    andar: 0,
    andarMax: 10,
    subir: () => {
        if (elevador.andar < elevador.andarMax) {
            elevador.andar++
            elevador.apresentarAndarAtual()
        } else {
            alert('Andar máximo')
        }
    },
    descer: () => {
        if (elevador.andar > 0) {
            elevador.andar--
           elevador.apresentarAndarAtual()
        } else {
            alert('Terreo!')
        }
    },
    apresentarAndarAtual : () => {
        alert(`${elevador.andar}`)
    },
    qtdPessoas: 0,
    qtdMaximaPessoa: 6,
    adicionarPessoa: () => {
        if (elevador.qtdPessoas < elevador.qtdMaximaPessoa) {
            elevador.qtdPessoas++
            elevador.apresentarQtdPessoa()
        }
        else {
            alert('O elevador já esta cheio')
        }
    },
    removerPessoa: () => {
        if (elevador.qtdPessoas > 0) {
            elevador.qtdPessoas--
            elevador.apresentarQtdPessoa()
        } else {
            alert('Não tem mais ninguém no elevador')
        }
    },
    apresentarQtdPessoa : () => {
        alert(`${elevador.qtdPessoas}`)
    },
}

function descer() {
    elevador.descer()
}

function subir() {
    elevador.subir()
}

function adicionarPessoa() {
    elevador.adicionarPessoa()
}

function removerPessoa() {
    elevador.removerPessoa()
}

