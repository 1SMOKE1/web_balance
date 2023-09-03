import styles from "./AdsStrategy.module.css";
import ads_strategy from "../../assets/ads_strategy.png";
import { useEffect, useState } from "react";
import anime from "animejs";
import { Debounce } from "../../hooks/Debounce";
import Aos from "aos";
import "aos/dist/aos.css";

export const AdsStratagy = () => {
  const [displayLine, setDisplayLine] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const debouncedHandleScroll = Debounce(handleScroll, 500);

  const animateLine = () => {
    setDisplayLine(true);
    anime({
      targets: ".st4, .st5",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "cubicBezier(.5, .05, .1, .3)",
      duration: 1000,
      delay: function (el, i) {
        return i * 250;
      },
    });
  };

  useEffect(() => {
    Aos.init();
    window.addEventListener("scroll", debouncedHandleScroll);

    if (scrollPosition >= 800) {
      setTimeout(() => {
        animateLine();
      }, 250);
    }

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [scrollPosition, debouncedHandleScroll]);

  return (
    <section>
      <div className="container">
        <div className={styles.ads_strategy}>
          <div
            data-aos="fade-left"
            className={`bg6 ${styles.yellow_rectangle}`}
          >
            <h2
              className={`${styles.yellow_rectangle__text} h2 montserrat c1 bold`}
            >
              Досягнення бізнес-цілей та довгострокового успіху - це важливі
              напрямки у вивченні системи технологій та людей
            </h2>
          </div>
          <img
            data-aos="fade-right"
            className={styles.ads_strategy__photo}
            src={ads_strategy}
            alt=""
          />
          <div className={styles.title_block}>
            <svg
              className={styles.line_yellow}
              width="72.5%"
              height="176"
              viewBox="0 0 1337 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: "none",
                display: displayLine ? "block" : "none",
              }}
            >
              <path
                className="st4"
                d="M0.591469 173.5H658.308L930.385 75.5H1149.82L1338.5 3"
                stroke="#F7C667"
                strokeWidth="5"
              />
            </svg>
            <h1 className={`h1-sm black montserrat ${styles.title}`}>
              ПіАР-СТРАТЕГІЯ
            </h1>
            <svg
              className={styles.line_blue}
              width="72.5%"
              height="176"
              viewBox="0 0 1339 176"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: "none",
                display: displayLine ? "block" : "none",
              }}
            >
              <path
                className="st4"
                d="M0 173.5H657.716L929.793 75.5H1149.23L1337.91 3"
                stroke="#8BD2D8"
                strokeWidth="5"
              />
            </svg>
          </div>
          <div className={styles.text_block}>
            <p className="montserrat semi-bold">
              Ваш веб-сайт для нас – це ви: ваш характер, ваші звички, стиль
              життя вашої компанії. І ми прагнемо створити найкращу версію
              вашого майбутнього сайту, враховуючи перетин технологій компанії
              та людей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
