import { useEffect, useState } from "react";
import styles from "./SubMenu.module.css";
import anime from "animejs";
import Typewriter, { TypewriterClass } from 'typewriter-effect'

export const SubMenu = () => {
  

  const [displayLine, setDisplayLine] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const typeEffect = (typewriter: TypewriterClass, str: string, pauseFor: number) => {
    return typewriter
      .pauseFor(pauseFor)
      .typeString(str)
      .start();
  }

  const animateLine = () => {
    setDisplayLine(true);
    anime({
      targets: ".st2, .st3",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "cubicBezier(.5, .05, .1, .3)",
      duration: 1000,
      delay: function (el, i) {
        return i * 250;
      },
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (scrollPosition >= 200) {
      setTimeout(() => {
        animateLine();
      }, 500);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className={`bg3 ${styles.under_bg}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <svg
            className={styles.line}
            width="9"
            height="194"
            viewBox="0 0 9 194"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "none",
              display: displayLine ? "block" : "none",
            }}
          >
            <path
              className="st2"
              d="M4.5 0.5L4 193"
              stroke="#04454B"
              strokeWidth="8"
            />
          </svg>
          <h4 className={`h4 c1 bold montserrat ${styles.title}`}>
          <Typewriter
            options={{
              cursor: ''
            }}
              onInit={(typewriter) => {
                typeEffect(typewriter, "LANDING PAGE", 1000)
              }}
            />
          </h4>
          <svg
            className={styles.line}
            width="11"
            height="154"
            viewBox="0 0 11 154"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "none",
              display: displayLine ? "block" : "none",
            }}
          >
            <path
              className="st2"
              d="M6.5 1L4.5 153"
              stroke="#04454B"
              strokeWidth="8"
            />
          </svg>
          <h4 className={`h4 c1 bold montserrat ${styles.title}`}>
            <Typewriter
              options={{
                cursor: ''
              }}
                onInit={(typewriter) => {
                  typeEffect(typewriter, "ІНТЕРНЕТ МАГАЗИН", 1500)
                }}
              />
          </h4>
          <svg
            className={styles.line}
            width="9"
            height="85"
            viewBox="0 0 9 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fill: "none",
              display: displayLine ? "block" : "none",
            }}
          >
            <path
              className="st2"
              d="M4.5 0.5V85"
              stroke="#04454B"
              strokeWidth="8"
            />
          </svg>

          <h4 className={`h4 c1 bold montserrat ${styles.title}`}>
          <Typewriter
            options={{
              cursor: ''
            }}
              onInit={(typewriter) => {
                typeEffect(typewriter, "БІЗНЕС САЙТ", 2250)
              }}
            />
          </h4>
        </div>
      </div>
    </div>
  );
};
