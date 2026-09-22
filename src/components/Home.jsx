import styles from './Home.module.scss';

export default function Home({ onEnter }) {
  return (
    <>
      {/* Hero: Split assimétrico + visual ousado */}
      <section className={styles.heroSplit}>
        <div className={styles.heroGrid}>
          {/* Left: Headline ousada + destaque sensorial */}
          <div className={styles.heroLeft}>
            <p className={styles.eyebrow}>SAÚDE INTELIGENTE</p>
            <h1 className={styles.heroTitle}>
              Seu corpo fala.<br />Você só precisa ouvir os números.
            </h1>
            <p className={styles.heroLead}>
              Uma calculadora de IMC não é sobre números bonitos. É sobre você entender <em>realmente</em> seu corpo — histórico, contexto, evolução.
            </p>
            <div className={styles.heroCta}>
              <button onClick={onEnter} className={styles.btnPrimary}>
                Calcular meu IMC
              </button>
              <button className={styles.btnGhost}>
                Saiba mais →
              </button>
            </div>
          </div>

          {/* Right: Visual surpreendente */}
          <div className={styles.heroRight}>
            <svg
              width="100%"
              height="320"
              viewBox="0 0 320 320"
              className={styles.healthSvg}
            >
              <defs>
                <radialGradient id="health-gradient" cx="50%" cy="50%">
                  <stop offset="0%" style={{ stopColor: '#2ea89a', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: '#0f2b1f', stopOpacity: 0.03 }} />
                </radialGradient>
                <linearGradient id="bar-grad" x1="0%" x2="100%">
                  <stop offset="0%" style={{ stopColor: '#2ea89a' }} />
                  <stop offset="100%" style={{ stopColor: '#1a6b5c' }} />
                </linearGradient>
              </defs>
              <circle cx="160" cy="160" r="155" fill="url(#health-gradient)" stroke="#e1e6e0" strokeWidth="1.5" />
              {/* Representação visual: corpo humano */}
              <circle cx="160" cy="90" r="25" fill="#2ea89a" opacity="0.8" />
              <ellipse cx="160" cy="160" rx="35" ry="50" fill="none" stroke="#2ea89a" strokeWidth="2" opacity="0.6" />
              <line x1="130" y1="130" x2="90" y2="100" stroke="#2ea89a" strokeWidth="2" opacity="0.5" />
              <line x1="190" y1="130" x2="230" y2="100" stroke="#2ea89a" strokeWidth="2" opacity="0.5" />
              <line x1="130" y1="205" x2="100" y2="260" stroke="#2ea89a" strokeWidth="2" opacity="0.5" />
              <line x1="190" y1="205" x2="220" y2="260" stroke="#2ea89a" strokeWidth="2" opacity="0.5" />
              <text x="160" y="250" textAnchor="middle" style={{ fontFamily: 'ui-monospace', fontSize: '14px', fontWeight: 600, fill: '#2ea89a', opacity: 0.9 }}>
                BMI 23.5
              </text>
              <text x="160" y="270" textAnchor="middle" style={{ fontFamily: 'ui-monospace', fontSize: '12px', fill: '#5a7566', opacity: 0.7 }}>
                Saudável
              </text>
            </svg>
          </div>
        </div>
        <div className={styles.geoAccent} />
      </section>

      {/* Seção de valor: Timeline vertical */}
      <section className={styles.valueSection}>
        <div className={styles.container}>
          <div className={styles.valueHeader}>
            <p className={styles.eyebrow}>COMO FUNCIONA</p>
            <h2>Três passos para entender sua saúde</h2>
          </div>

          {/* Timeline visual vertical */}
          <div className={styles.timeline}>
            {/* Linha conectora */}
            <div className={styles.timelineConnector} />

            {/* Step 1 */}
            <div className={styles.timelineStep}>
              <div className={styles.stepCircle}>1</div>
              <div className={styles.stepContent}>
                <h3>Insira seus dados</h3>
                <p>Peso e altura. Nada mais. Sem nome, email, ou qualquer coisa que você não queira compartilhar.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.timelineStep}>
              <div className={styles.stepCircle}>2</div>
              <div className={styles.stepContent}>
                <h3>Veja seu índice</h3>
                <p>Seu IMC aparece com contexto — não é só um número. É uma categoria, uma interpretação clara do que significa para você.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.timelineStep}>
              <div className={styles.stepCircle}>3</div>
              <div className={styles.stepContent}>
                <h3>Acompanhe mudanças</h3>
                <p>Você guarda cada resultado. Vê tendências ao longo do tempo. Entende sua saúde de verdade, não de forma isolada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insight surpreendente */}
      <section className={styles.insightSection}>
        <div className={styles.container}>
          <div className={styles.insightContent}>
            <p className={styles.eyebrow}>DADO PARA VOCÊ PENSAR</p>
            <p className={styles.insightQuote}>
              Sua saúde não é uma nota de prova.<br />
              É uma conversa permanente com seu corpo.
            </p>
            <p className={styles.meta}>O IMC é um ponto de partida — não um veredito final.</p>
          </div>
        </div>
      </section>

      {/* CTA final: Sem mimimi */}
      <section className={styles.ctaFinal}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Pronto para começar?</h2>
            <p className={styles.ctaLead}>
              Sua primeira medição leva 30 segundos. O que você descobre sobre si é priceless.
            </p>
            <button onClick={onEnter} className={styles.btnPrimary} style={{ marginBottom: '20px' }}>
              Calcular meu IMC agora
            </button>
            <p className={styles.meta}>Gratuito. Sem anúncios. Seus dados, sua privacidade.</p>
          </div>
        </div>
      </section>
    </>
  );
}
