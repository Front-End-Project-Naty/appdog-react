import Banner from './components/banner/banner';
import TextField from './components/TextField/TextField';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Nome" placeholder="Digite o nome do seu gatinho"/>
      <TextField label="Cor" placeholder="Digite a cor dele/a"/>
      <TextField label="Imagem" placeholder="Digite o endereço da foto"/>
    </div>
  );
}

export default App;
