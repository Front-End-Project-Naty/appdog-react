import { useState } from 'react'
import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import TextField from '../TextField/TextField'
import './Formulario.css'

const Formulario = (props) => {

    const racas = [
        'Maltês',
        'Pug',
        'Golden',
        'SRD',
        'Yorkshire',
        'Husky',
        'Buldogue Francês'
    ]

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [imagem, setImagem] = useState('')
    const [raca, setRaca] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCaoCadastrado({
            nome,
            idade,
            imagem,
            raca
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do seu cão</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do seu cão"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField 
                    obrigatorio={true} 
                    label="Idade" 
                    placeholder="Digite a idade"
                    valor={idade}
                    aoAlterado={valor => setIdade(valor)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da foto"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />            
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Raças" 
                    itens={racas}
                    valor={raca}
                    aoAlterado={valor => setRaca(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario