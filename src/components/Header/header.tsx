import styles from "./header.module.css";
import logo from "./../../assets/logo.svg";
import phoneIcon from "./../../assets/phone_icon.svg";

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
        <div className={styles.phone_block}>
          <img src={phoneIcon} alt="" />
          <a href="ok" className={`montserrat semi-bold c1 h4`}>
            095 489 58 75
          </a>
        </div>
      </div>
    </header>
  );
};
