import TextField from '../TextField/TextField'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do seu gato</h2>
                <TextField label="Nome" placeholder="Digite o nome do seu gatinho"/>
                <TextField label="Cor" placeholder="Digite a cor dele/a"/>
                <TextField label="Imagem" placeholder="Digite o endereço da foto"/>            
            </form>
        </section>
    )
}

export default Formulario