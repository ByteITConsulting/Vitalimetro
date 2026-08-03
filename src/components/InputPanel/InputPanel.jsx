import styles from './InputPanel.module.scss';

function InputPanel({ 
  weight, 
  heightCm, 
  heightFt, 
  useFt, 
  onWeightChange, 
  onHeightChange, 
  onHeightFtChange,
  onUnitToggle 
}) {
  return (
    <div className="panel" data-tag="Entrada">
      <div className={styles.unitToggle} role="group" aria-label="Unidade de altura">
        <button 
          type="button" 
          className={!useFt ? styles.active : ''} 
          onClick={() => onUnitToggle(false)}
        >
          cm
        </button>
        <button 
          type="button" 
          className={useFt ? styles.active : ''} 
          onClick={() => onUnitToggle(true)}
        >
          ft/in
        </button>
      </div>

      <div className={styles.field}>
        <div className={styles.fieldHead}>
          <label htmlFor="weight">Peso</label>
          <div className={styles.fieldValue}>
            <span>{weight.toFixed(1).replace('.0', '')}</span>
            <span>kg</span>
          </div>
        </div>
        <input 
          type="range" 
          id="weight" 
          min="30" 
          max="200" 
          step="0.5" 
          value={weight}
          onChange={(e) => onWeightChange(parseFloat(e.target.value))}
        />
        <div className={styles.ticks}>
          <span>30</span>
          <span>65</span>
          <span>100</span>
          <span>135</span>
          <span>170</span>
          <span>200</span>
        </div>
      </div>

      {!useFt && (
        <div className={styles.field}>
          <div className={styles.fieldHead}>
            <label htmlFor="height">Altura</label>
            <div className={styles.fieldValue}>
              <span>{Math.round(heightCm)}</span>
              <span>cm</span>
            </div>
          </div>
          <input 
            type="range" 
            id="height" 
            min="120" 
            max="220" 
            step="1" 
            value={heightCm}
            onChange={(e) => onHeightChange(parseFloat(e.target.value))}
          />
          <div className={styles.ticks}>
            <span>120</span>
            <span>145</span>
            <span>170</span>
            <span>195</span>
            <span>220</span>
          </div>
        </div>
      )}

      {useFt && (
        <div className={styles.field}>
          <div className={styles.fieldHead}>
            <label htmlFor="heightFt">Altura</label>
            <div className={styles.fieldValue}>
              <span>{formatFtIn(heightFt)}</span>
            </div>
          </div>
          <input 
            type="range" 
            id="heightFt" 
            min="48" 
            max="87" 
            step="1" 
            value={heightFt}
            onChange={(e) => onHeightFtChange(parseFloat(e.target.value))}
          />
          <div className={styles.ticks}>
            <span>4'0"</span>
            <span>5'0"</span>
            <span>6'0"</span>
            <span>7'3"</span>
          </div>
        </div>
      )}
    </div>
  );
}

function formatFtIn(totalInches) {
  const ft = Math.floor(totalInches / 12);
  const inch = Math.round(totalInches % 12);
  return `${ft}'${inch}"`;
}

export default InputPanel;
