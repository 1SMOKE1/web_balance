import styles from "./main.module.css";
import socialMedia from "./../../assets/social_media.png";
import logo from "../../assets/logo.svg";
import { useCallback, useEffect, useState } from "react";

export const Main = () => {
  const [yellowX2, setYellowX2] = useState(0);
  const [yellowY2, setYellowY2] = useState(0);

  const timer = useCallback(() => {
    const interval = setInterval(() => {
      if (yellowX2 !== 50) setYellowX2(yellowX2 + 1);
      clearInterval(interval);
    }, 10);
  }, [yellowX2, yellowY2]);

  useEffect(() => {
    timer();
  }, [timer]);

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.main_bg}>
          <div className={styles.content}>
            <div className={styles.logo_block}>
              <img className={styles.logo} src={logo} alt="" />
              <h3 className={`montserrat semi-bold h3 c2`}>Web-balance</h3>
            </div>
            <div className={styles.content_container}>
              <h1 className={`${styles.content_title} montserrat black h1 c2`}>
                САЙТИ ПІД КЛЮЧ
              </h1>
              <svg
                width="100%"
                height="200px"
                viewBox="0 0 1133 176"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 173.5H556.5L786.5 75.5H972L1131.5 3"
                  stroke="#F7C667"
                  stroke-width="5"
                />
              </svg>

              <h3
                className={`${styles.content_title} montserrat semi-bold h3 c2`}
              >
                Тільки для прогресивного бізнесу
              </h3>
              <ul className="montserrat semi-bold p c2">
                <li>Розробляємо</li>
                <li>Навчаємо</li>
                <li>Супроводжуємо</li>
              </ul>
            </div>
            <div className={styles.form_block}>
              <input
                className="bg3 p bold"
                type="text"
                placeholder="Ваше ім'я?"
              />
              <input
                className="bg3 p bold"
                type="text"
                placeholder="Номер телефону..."
              />
              <button className="bg4 c2 p bold">Замовити дзвінок</button>
            </div>
          </div>
        </div>

        <img className={styles.social_media} src={socialMedia} alt="" />
      </div>
    </main>
  );
};
