import './Raca.css'

const Raca = (props) => {
const css = { backgroundColor: props.corSecundaria}

    return (
        <section className='raca' style={css }>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Raca 