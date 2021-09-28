import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Headers from './components/header/Headers.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
      </Router>
    </div>
  );
}

export default App;

