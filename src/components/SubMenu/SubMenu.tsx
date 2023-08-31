import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./SubMenu.module.css";
import anime from "animejs";
import { UseTypewriter } from "../../hooks/useTypewriter";
import { TypewriterHook } from "../../interfaces/TypewriterHook";
// import { Typewriter } from "../Typewriter/Typewriter";
// import Typewriter, { TypewriterClass } from 'typewriter-effect'


export const SubMenu = () => {

  const [displayLine, setDisplayLine] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [typedElements, setTypedElements]: [TypewriterHook[], Dispatch<SetStateAction<TypewriterHook[]>>] = useState([
    UseTypewriter({initialDelay: 750, typingSpeed: 100 , text: "LANDING PAGE"}),
    UseTypewriter({initialDelay: 1500, typingSpeed: 100, text: "ІНТЕРНЕТ-МАГАЗИН"}),
    UseTypewriter({initialDelay: 2250, typingSpeed: 100, text: "БІЗНЕС САЙТ"})
  ]);
  

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

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
  }, [scrollPosition, typedElements]);

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
            {typedElements[0].typedText}
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
            {/* <Typewriter /> */}
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
            {/* <Typewriter /> */}
          </h4>
        </div>
      </div>
    </div>
  );
};
