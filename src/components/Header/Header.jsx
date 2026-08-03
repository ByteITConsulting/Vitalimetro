import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.top}>
      <div className="eyebrow">Instrumento de referência corporal</div>
      <div className="mark">OMS · adultos 18+</div>
    </header>
  );
}

export default Header;
