import { useState } from 'react'
import { Form, InputGroup, Button, Table, Modal } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';

import { ThemeContext, themes } from './wrapper'
import './App.css'

function App() {
  const [titulo, setTitulo] = useState()
  const [autor, setAutor] = useState()
  const [data, setData] = useState()
  const [codigo, setCodigo] = useState(1)
  const [livros, setLivros] = useState([])
  const [show, setShow] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [total, setTotal] = useState(0)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // const pesquisa = () => setPesquisa([])


  function cadastrar() {
    let validoParaCadastro = true
    livros.forEach((livro) => {
      if (
        livro.titulo === titulo &&
        livro.autor === autor &&
        livro.data === data
      ) {
        validoParaCadastro = false
      }
    })
    if (validoParaCadastro) {
      let livro = {
        titulo,
        autor,
        data,
        codigo: codig(),
      }

      setLivros([livro, ...livros])
      limparForm()
    } else {
      alert('Esse livro ja foi cadastrado!')
    }
  }

  function codig() {
    setCodigo(codigo + 1)
    return codigo
  }

  function totalLivros() {
    let total = 0
    livros.forEach((livro) => {
      if (livro.codigo > 0) {
        return total + 1
      }
    })

    // return total
  }

  function excluir(titulo) {
    livros.forEach((livro, index) => {
      if (livro.titulo === titulo) {
        livros.splice(index, 1)
        setLivros([...livros])
      }
    })
  }

  function limparForm() {
    setTitulo('')
    setAutor('')
    setData('')
  }

  function pesquisar() {

    let pesquisa = ''
    let pesquisado = ''

    livros.forEach(livro => {
      if (
        pesquisa === livro.titulo
      ) {
        setLivros([...livros])
      }
    })

    return pesquisado
  }

  return (
    <>
      <div className='container'>
        <h1 className='th'> Loja de livros </h1>
        <div className='dark' >
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                variant="dark-link"
                size="lg"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
              </Button>
            )}
          </ThemeContext.Consumer>
        </div>
        <InputGroup className="mb-2 mt-5">
          <Form.Control
            value={titulo}
            onChange={(e) => { setTitulo(e.target.value) }}
            placeholder='Título'
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <Form.Control
            value={autor}
            onChange={(e) => { setAutor(e.target.value) }}
            placeholder='Autor'
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup className="mb-2">
          <Form.Control
            value={data}
            onChange={(e) => { setData(e.target.value) }}
            className='mr'
            type="date"
            size='sm' codigo
          />
        </InputGroup>

        <div className='bt'>
          <Button variant="primary" className='fi ' onClick={handleShow}>
            Filtrar
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Filtro de livros</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control
                    value={titulo}
                    onChange={(e) => { setTitulo(e.target.value) }}
                    placeholder='Título'
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Autor</Form.Label>
                  <Form.Control
                    value={autor}
                    // onChange={(e) => { setTitulo(e.target.value) }}
                    placeholder='Autor'
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={(e) => { pesquisar(e) }}>
                Filtrar
              </Button>
            </Modal.Footer>
          </Modal>
          <Button onClick={cadastrar} className='ca'>Cadastrar</Button>
        </div>
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>Codigo</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Data</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {
              livros.map((livro) => {
                return (
                  <tr>
                    <td>{livro.codigo}</td>
                    <td>{livro.titulo}</td>
                    <td>{livro.autor}</td>
                    <td>{livro.data}</td>
                    <td>
                      <Button variant="outline-danger" onClick={() => { excluir(livro.titulo) }}>
                        <BsTrash />
                      </Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <div className='tot'>
          Total de livros: {totalLivros()}
        </div>
      </div>
    </>
  );
}

export default App;
