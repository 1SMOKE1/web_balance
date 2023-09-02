import styles from "./main.module.css";
import { Site } from "../Site/Site";
import { AdsStratagy } from "../AdsStratagy/AdsStrategy";

export const Main = () => {

  return (
    <main className={styles.main}>
      <Site />
      <AdsStratagy />
    </main>
  );
};
