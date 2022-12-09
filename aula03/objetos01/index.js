let baseDeVeiculos = []

function apresentarMenu() {
    let valor = prompt(`
        (1) - Cadastrar automóvel;
        (2) - Pesquisar automóvel;
        (3) - Excluir automóvel;
        (0) - Sair;
        `)

    if (valor == 1) {
        cadastrar()
        apresentarMenu()
    }

    if (valor == 2) {
        pesquisar()
        apresentarMenu()
    }

    if (valor == 3) {
        excluir()
        apresentarMenu()
    }

    if (valor == 0) {
        sair()
    }

}

function cadastrar() {

    let marca = prompt('Marca do automóvel: ')
    let modelo = prompt('Modelo do automóvel: ')
    let placa = prompt('Placa do automóvel: ')
    let ano = prompt('Ano do automóvel: ')

    let veiculos = {
        marca: marca,
        modelo: modelo,
        placa: placa,
        ano: ano,
    }

    let cadastro = false
    baseDeVeiculos.forEach(veiculo => {
        if (veiculo.placa === veiculos.placa) {
            cadastro = true
        }
    })

    if (cadastro === false) {
        baseDeVeiculos.push(veiculos)
        alert('automóvel adicionado com sucesso!')
    } else {
        alert('Essa placa ja foi cadastrada!')
    }
}

function pesquisar() {

    let pesquisa = prompt('Pesquise o automóvel pela placa, marca ou modelo.')
    let pesquisado = ''

    baseDeVeiculos.forEach(veiculo => {
        if (
            pesquisa === veiculo.placa ||
            pesquisa === veiculo.marca ||
            pesquisa === veiculo.modelo
        ) {
            pesquisado += `
        Marca: ${veiculo.marca}, 
        Modelo: ${veiculo.modelo}, 
        Placa: ${veiculo.placa},
        Ano: ${veiculo.ano}
        `
        }
    })

    if (pesquisado != '') {
        alert(pesquisado)
    } else {
        alert('Esse automóvel não esta cadastrado.')
    }
}

function excluir() {

    let removePlaca = prompt('Digite a placa do automóvel que deseja excluir.')
    let placaSistema = false

    baseDeVeiculos.forEach(function (veiculo, i) {
        if (veiculo.placa === removePlaca) {
            baseDeVeiculos.splice(i, 1)
            placaSistema = true
            alert(`automóvel de placa: ${removePlaca}, foi removido`)
        }
    })

    if (!placaSistema) {
        alert("automóvel não encontrado")
    }
}

function sair() {
    alert('Ate a próxima!')
}

apresentarMenu()