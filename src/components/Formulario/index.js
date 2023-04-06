import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import TextField from '../TextField/TextField'
import './Formulario.css'

const Formulario = () => {

    const racas = [
        'Maltês',
        'Pug',
        'Golden',
        'SRD',
        'Yorkshire',
        'Husky',
        'Buldogue Francês'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do seu cão</h2>
                <TextField obrigatorio={true} label="Nome" placeholder="Digite o nome do seu cão"/>
                <TextField obrigatorio={true} label="Idade" placeholder="Digite a idade"/>
                <TextField label="Imagem" placeholder="Digite o endereço da foto"/>            
                <ListaSuspensa obrigatorio={true} label="Raças" itens={racas}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario