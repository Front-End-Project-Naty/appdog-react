import './Cao.css'

const Cao = ({ nome, imagem, idade, corDeFundo }) => {
    console.log(imagem);
    return (<div className='cao'>
        <div className='cabecalho'style={{ backgroundColor: corDeFundo }}>
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