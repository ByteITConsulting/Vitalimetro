import { useState } from 'react';
import Home from './components/Home';
import Calculator from './components/Calculator';
import './styles/index.scss';

function App() {
  const [hasEnteredApp, setHasEnteredApp] = useState(false);

  // Show Home page if user hasn't entered the app yet
  if (!hasEnteredApp) {
    return <Home onEnter={() => setHasEnteredApp(true)} />;
  }

  // Show Calculator after user clicks "Calcular Agora"
  return <Calculator />;
}

export default App;
