import anime from "animejs";
import Aos from "aos";
import { useState, useEffect } from "react";
import { SubMenu } from "../SubMenu/SubMenu";
import styles from "./Site.module.css";

import socialMedia from '../../assets/social_media.png'
import "aos/dist/aos.css";
import { ConsultationForm } from "../ConsultationForm/ConsultationForm";
import { Logo } from "../Logo/Logo";

export const Site = () => {
  const [displayLine, setDisplayLine] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const animateLine = () => {
    setDisplayLine(true);
    anime({
      targets: ".st0, .st1",
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
    window.addEventListener("scroll", handleScroll);

    if(scrollPosition >= 0){
      setTimeout(() => {
        animateLine();
      }, 500);
    }
  



    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [scrollPosition]);

  return (
    <section id="main-anchor" >
      <div className="container">
        <div className={styles.content_wrap}>
          <div className={styles.site_bg}>
            <div className={styles.content}>
              <Logo />
              <div className={styles.content_container}>
                <h1
                  className={`${styles.content_title} montserrat black h1 c2`}
                >
                  САЙТИ ПІД КЛЮЧ
                </h1>
                <svg
                  width="100%"
                  height="200px"
                  viewBox="0 0 1133 176"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fill: "none",
                    display: displayLine ? "block" : "none",
                  }}
                  className={styles.yellow_line}
                >
                  <path
                    className="st0"
                    d="M0.5 173.5H556.5L786.5 75.5H972L1131.5 3"
                    stroke="#F7C667"
                    strokeWidth="5"
                  />
                </svg>
                <h3
                  className={`${styles.content_title} montserrat semi-bold h3 c2`}
                >
                  Тільки для прогресивного бізнесу
                </h3>
                <svg
                  width="100%"
                  height="200px"
                  viewBox="0 0 1133 176"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fill: "none",
                    display: displayLine ? "block" : "none",
                  }}
                  className={styles.light_blue_line}
                >
                  <path
                    className="st0"
                    d="M0 173.5H556L786 75.5H971.5L1131 3"
                    stroke="#8BD2D8"
                    strokeWidth="5"
                  />
                </svg>

                <ul className="montserrat semi-bold p c2" >
                  <li>Розробляємо</li>
                  <li>Навчаємо</li>
                  <li>Супроводжуємо</li>
                </ul>
              </div>
              <img
                data-aos="zoom-in"
                data-aos-anchor="#main-anchor"
                data-aos-anchor-placement="top"
                className={styles.social_media}
                src={socialMedia}
                alt=""
              />
              <ConsultationForm blockWidth="62%" />
            </div>
          </div>
          <SubMenu />
        </div>
      </div>
    </section>
  );
};
