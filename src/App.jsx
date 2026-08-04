import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import InputPanel from './components/InputPanel/InputPanel';
import GaugePanel from './components/GaugePanel/GaugePanel';
import ResultCard from './components/ResultCard/ResultCard';
import Legend from './components/Legend/Legend';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { ZONES } from './data/zones';
import { calculateBMI, classifyBMI, getHeightCm } from './utils/bmiCalculator';
import './styles/index.scss';

function App() {
  const [weight, setWeight] = useState(70);
  const [heightCm, setHeightCm] = useState(170);
  const [heightFt, setHeightFt] = useState(67); // 5'7"
  const [useFt, setUseFt] = useState(false);
  const [imc, setImc] = useState(0);
  const [zone, setZone] = useState(ZONES[1]); // default to normal

  useEffect(() => {
    const currentHeightCm = getHeightCm(heightCm, heightFt, useFt);
    const calculatedImc = calculateBMI(weight, currentHeightCm);
    const currentZone = classifyBMI(calculatedImc, ZONES);
    
    setImc(calculatedImc);
    setZone(currentZone);
  }, [weight, heightCm, heightFt, useFt]);

  const handleWeightChange = (newWeight) => {
    setWeight(newWeight);
  };

  const handleHeightChange = (newHeight) => {
    setHeightCm(newHeight);
  };

  const handleHeightFtChange = (newHeightFt) => {
    setHeightFt(newHeightFt);
  };

  const handleUnitToggle = (shouldUseFt) => {
    setUseFt(shouldUseFt);
  };

  return (
    <ErrorBoundary>
      <div className="wrap">
        <Header />
        <Hero />
        
        <div className="stage">
          <InputPanel
            weight={weight}
            heightCm={heightCm}
            heightFt={heightFt}
            useFt={useFt}
            onWeightChange={handleWeightChange}
            onHeightChange={handleHeightChange}
            onHeightFtChange={handleHeightFtChange}
            onUnitToggle={handleUnitToggle}
          />
          <GaugePanel imc={imc} />
        </div>

        <ResultCard imc={imc} zone={zone} />
        
        <Legend zones={ZONES} />

        <footer>
          Esta calculadora usa a fórmula padrão do IMC (peso ÷ altura²) e as faixas de classificação da Organização Mundial da Saúde para adultos. O IMC não distingue massa muscular de massa gorda e não substitui avaliação clínica — converse com um profissional de saúde para uma análise completa.
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
