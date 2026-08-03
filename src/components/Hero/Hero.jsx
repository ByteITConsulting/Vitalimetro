import styles from './Hero.module.scss';

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Onde seu corpo <em>se posiciona</em><br />na escala do IMC.</h1>
      <p className="lede">
        Informe peso e altura para ver o cálculo em tempo real, marcado num instrumento de faixas — do abaixo do peso à obesidade grau III.
      </p>
    </section>
  );
}

export default Hero;
