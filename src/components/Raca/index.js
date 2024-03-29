import Cao from '../Cao'
import './Raca.css'


const Raca = (props) => {
const css = { backgroundColor: props.corSecundaria}

    return (
        props.caes.length > 0 ? <section className='raca' style={css }>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='caes'>
                {props.caes.map( cao => <Cao corDeFundo={props.corPrimaria} key={cao.nome} nome={cao.nome} cargo={cao.idade} imagem={cao.imagem}/>)}
            </div>        
        </section>
        : ''
    )
}

export default Raca 