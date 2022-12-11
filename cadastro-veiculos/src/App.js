import { useState } from 'react';
import './App.css';

function App() {
  const [modelo, setModelo] = useState()
  const [marca, setMarca] = useState()
  const [placa, setPlaca] = useState()
  const [veiculos, setVeiculos] = useState([])

  function cadastrar() {

    if (veiculoCadastrado(placa)) {
      alert('Essa placa ja foi adicionada!')
    } else {
      const veiculo = {
        modelo,
        marca,
        placa
      }

      veiculos.push(veiculo)

      setVeiculos([...veiculos])
      limparForm()
    }
  }
  function limparForm() {
    setModelo('')
    setMarca('')
    setPlaca('')
  }
  function veiculoCadastrado(placa) {
    let veiculoCadastrado = false
    veiculos.forEach(veiculo => {
      if (veiculo.placa === placa) {
        veiculoCadastrado = true
      }
    });
    return veiculoCadastrado
  }

  function pesquisar() {

    let pesquisa = prompt('Pesquise o automóvel pela placa, marca ou modelo.')
    let pesquisado = ''

    veiculos.forEach(veiculo => {
      if (
        pesquisa === veiculo.placa ||
        pesquisa === veiculo.marca ||
        pesquisa === veiculo.modelo
      ) {
        pesquisado += `
        Marca: ${veiculo.marca}
        Modelo: ${veiculo.modelo}
        Placa: ${veiculo.placa}
        `
      }
    })

    if (pesquisado !== '') {
      alert(pesquisado)
    } else {
      alert('Esse automóvel não esta cadastrado.')
    }
  }

  function deletar() {
    const veiculo = {
      modelo,
      marca,
      placa
    }
    veiculos.splice(veiculo)

    setVeiculos([...veiculos])
  }
  return (
    <>
      <div className='form m5'>
        <h1> Cadastro de veículos seminovos</h1>
        <h3 className='car'>Cadastrar veículo</h3>
        <input className='m5 car'
          placeholder='modelo'
          value={modelo}
          onChange={(e) => { setModelo(e.target.value) }}
        />
        <input className='m5 car'
          placeholder='Marca'
          value={marca}
          onChange={(e) => { setMarca(e.target.value) }}
        />
        <input className='m5 car'
          placeholder='Placa'
          value={placa}
          onChange={(e) => { setPlaca(e.target.value) }}
        />
        <button className='m5 car' onClick={cadastrar}>
          Cadastrar veículo
        </button>
        <button className='m5 car' onClick={pesquisar}>
          Pesquisae veículos
        </button>
        <button className='m5 car' onClick={deletar}>
          Deletar todos veículos
        </button>
      </div>
      <table>
        <tr>
          <th>Modelo</th>
          <th>Marca</th>
          <th>Placa</th>
        </tr>
        {
          veiculos.map((veiculo) => {
            return (
              <tr>
                <td>{veiculo.modelo}</td>
                <td>{veiculo.marca} </td>
                <td>{veiculo.placa} </td>
              </tr>
            )
          })
        }
      </table>
    </>
  );
}

export default App;
