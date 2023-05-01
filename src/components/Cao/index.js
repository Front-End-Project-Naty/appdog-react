import './Cao.css'

const Cao = ({ nome, imagem, idade}) => {
    return (<div className='cao'>
        <div className='cabecalho'>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{idade}</h5>
        </div>
    </div>

    )
}

export default Cao