import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation';

function App() {
  return (
    <Router className="App">
      <Navigation />
    </Router>
  );
}

export default App;
