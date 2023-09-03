import styles from './Footer.module.css';
import { Logo } from '../Logo/Logo';
import { Phone } from '../Phone/Phone';

export const Footer = () => {

  return (
    <footer className={`bg1 ${styles.footer}`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo__wrap}>
            <Logo />
          </div>
          <Phone color="#ffffff"/>
        </div>
      </div>
    </footer>
  )
}