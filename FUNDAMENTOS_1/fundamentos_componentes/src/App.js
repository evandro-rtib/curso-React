//  components
import FirstComponent
 from './components/FirstComponents';
// style / CSS
import './App.css';
import TemplateExpressions from './components/TemplatesExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React Componentes</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  )
}

export default App;
