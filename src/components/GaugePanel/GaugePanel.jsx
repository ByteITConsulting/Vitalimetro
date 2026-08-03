import { ZONES, SCALE_MIN, SCALE_MAX } from '../../data/zones';
import styles from './GaugePanel.module.scss';

function GaugePanel({ imc }) {
  const clamped = Math.max(SCALE_MIN, Math.min(SCALE_MAX, imc));
  const pct = ((clamped - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;

  return (
    <div className={`panel ${styles.gaugePanel}`} data-tag="Leitura">
      <div className={styles.gaugeWrap}>
        <div className={styles.gaugeTrack}>
          {ZONES.map((zone) => {
            const top = Math.min(zone.max, SCALE_MAX);
            const bottom = Math.max(zone.min, SCALE_MIN);
            const segmentPct = ((top - bottom) / (SCALE_MAX - SCALE_MIN)) * 100;
            return (
              <div
                key={zone.key}
                className={styles.seg}
                style={{ height: `${segmentPct}%`, background: zone.color }}
              />
            );
          }).reverse()}
          <div className={styles.marker} style={{ bottom: `calc(${pct}% - 1px)` }}>
            <div className={styles.markerArrow} />
          </div>
        </div>
        <div className={styles.gaugeLabels}>
          {[42, 35, 30, 25, 18.5, 14].map(v => (
            <span key={v}>{v}</span>
          ))}
        </div>
        <div 
          className={styles.markerTag} 
          style={{ 
            bottom: `calc(${pct}% - 12px)`,
            color: `var(--${classifyZone(imc)})`
          }}
        >
          {imc.toFixed(1)}
        </div>
      </div>
      <div className={styles.gaugeCaption}>
        Cada faixa corresponde a uma classificação da OMS
      </div>
    </div>
  );
}

function classifyZone(imc) {
  const zone = ZONES.find(z => imc >= z.min && imc < z.max);
  return zone ? zone.key : ZONES[ZONES.length - 1].key;
}

export default GaugePanel;
