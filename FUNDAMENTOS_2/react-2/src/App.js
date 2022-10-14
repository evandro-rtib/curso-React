import './App.css';
import Img2 from "./assets/img2.jpg"
function App() {
  return (
    <div className="App">
      {/*Imagens na pasta public*/}
      <img src="/img1.jpg" alt="Paisagem" />
      <img src={Img2} alt="Outra Paisagem" />

    </div>
  );
}

export default App;
