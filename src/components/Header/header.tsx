import styles from "./header.module.css";
import logo from "./../../assets/logo.svg";
import { Phone } from "../Phone/Phone";


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo_block}>
          <img src={logo} alt="" />
          <a href="ok" className={`montserrat semi-bold c1 h3`}>
            Web-balance
          </a>
        </div>
        <Phone color="#04454B" />
      </div>
    </header>
  );
};
