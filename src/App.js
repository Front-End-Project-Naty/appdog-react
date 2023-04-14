import { useState } from 'react';
import Formulario from './components/Formulario';
import Banner from './components/banner/banner';

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
    </div>
  );
}

export default App;
