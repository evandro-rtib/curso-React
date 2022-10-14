//  components
import FirstComponent
 from './components/FirstComponents';
// style / CSS
import './App.css';
import TemplateExpressions from './components/TemplatesExpressions';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React Componentes</h1>
      <FirstComponent />
      <TemplateExpressions />
    </div>
  );
}

export default App;
