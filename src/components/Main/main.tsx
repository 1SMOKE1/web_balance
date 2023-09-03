import styles from "./main.module.css";
import { Site } from "../Site/Site";
import { AdsStratagy } from "../AdsStratagy/AdsStrategy";
import { About } from "../About/About";
import { Footer } from "../Footer/Footer";

export const Main = () => {

  return (
    <main className={styles.main}>
      <Site />
      <AdsStratagy />
      <About />
      <Footer />
    </main>
  );
};
