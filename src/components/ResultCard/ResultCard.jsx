import styles from './ResultCard.module.scss';

function ResultCard({ imc, zone }) {
  return (
    <div 
      className={styles.result} 
      style={{ borderLeft: `6px solid ${zone.color}` }}
    >
      <div className={styles.resultNumber}>
        <span>{imc.toFixed(1)}</span>
        <small>IMC atual</small>
      </div>
      <div>
        <p className={styles.resultCategory} style={{ color: zone.color }}>
          {zone.name}
        </p>
        <p className={styles.resultDesc}>{zone.desc}</p>
      </div>
    </div>
  );
}

export default ResultCard;
