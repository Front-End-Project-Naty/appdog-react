import { useState } from 'react';
import Formulario from './components/Formulario';
import Banner from './components/banner/banner';
import Raca from './components/Raca';
import Rodape from './components/Rodape';

function App() {

  const racas = [
    {
      nome: 'Maltês',
      corPrimaria: 'EA047E',
      corSecundaria: 'FFB4B4',
    },

    {
      nome: 'Pug',
      corPrimaria: 'FF6D28',
      corSecundaria: 'FFB4B4',
    },

    {
      nome: 'Golden',
      corPrimaria: 'FCE700',
      corSecundaria: 'FFB4B4',
    },

    {
      nome: 'SRD',
      corPrimaria: '00F5FF',
      corSecundaria: 'FFB4B4',
    },

    {
      nome: 'Yorkshire',
      corPrimaria: '72147E',
      corSecundaria: 'FFB4B4',
    },

    {
      nome: 'Husky',
      corPrimaria: 'FA9905',
      corSecundaria: 'FFB4B4',
    },

    {
      nome: 'Buldogue Francês',
      corPrimaria: 'FF5200',
      corSecundaria: 'FFB4B4',
    }

  ]

  
  const [caes, setCaes] = useState([])

  const aoNovoCaoAdicionado = (cao) => {
    console.log(cao)
    setCaes([...caes, cao])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario racas={racas.map(raca =>raca.nome)} aoCaoCadastrado={cao => aoNovoCaoAdicionado(cao)}/>
      
      {racas.map((raca) => <Raca 
        key={raca.nome} 
        nome={raca.nome} 
        corPrimaria={raca.corPrimaria} 
        corSecundaria={raca.corSecundaria} 
        caes={caes.filter(cao => cao.raca === raca.nome)}
      />)}
      
      <Rodape />
    </div>
  );
}


export default App;
