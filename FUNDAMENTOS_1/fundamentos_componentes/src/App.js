//  components
import FirstComponent
 from './components/FirstComponents';
// style / CSS
import './App.css';
import TemplateExpressions from './components/TemplatesExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React Componentes</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
