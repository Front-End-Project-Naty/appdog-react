import { useState } from 'react';
import Formulario from './components/Formulario';
import Banner from './components/banner/banner';
import Raca from './components/Raca';

function App() {

  const [caes, setCaes] = useState([])

  const aoNovoCaoAdicionado = (cao) => {
    console.log(cao)
    setCaes([...caes, cao])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCaoCadastrado={cao => aoNovoCaoAdicionado(cao)}/>
      <Raca nome="Maltês"/>
      <Raca nome="Pug"/>
      <Raca nome="Golden"/>
      <Raca nome="SRD"/>
      <Raca nome="Yorkshire"/>
      <Raca nome="Husky"/>
      <Raca nome="Buldogue Francês"/>
    </div>
  );
}

export default App;
