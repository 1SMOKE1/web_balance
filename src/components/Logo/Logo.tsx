import styles from './Logo.module.css';
import logo from "../../assets/logo.svg";


export const Logo = () => {

  return (
    <div className={styles.logo_block}>
      <img className={styles.logo} src={logo} alt="" />
      <h3 className={`montserrat semi-bold h3 c2`}>Web-balance</h3>
    </div>
  )
}