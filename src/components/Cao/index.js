import './Cao.css'

const Cao = ({ nome, imagem, corDeFundo }) => {
    console.log(imagem);
    return (<div className='cao'>
        <div className='cabecalho'style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
        </div>
    </div>

    )
}

export default Cao