import styles from './Legend.module.scss';

function Legend({ zones }) {
  return (
    <section className={styles.legend}>
      <h2>A escala completa</h2>
      <div className={styles.legendGrid}>
        {zones.map(zone => (
          <div key={zone.key} className={styles.legendItem}>
            <div className={styles.swatch} style={{ background: zone.color }} />
            <div className={styles.lname}>{zone.name}</div>
            <div className={styles.lrange}>
              {zone.min === 0 
                ? `< ${zone.max}` 
                : zone.max >= 60 
                  ? `≥ ${zone.min}` 
                  : `${zone.min}–${zone.max}`}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Legend;
