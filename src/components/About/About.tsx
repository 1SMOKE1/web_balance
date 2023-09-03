import styles from "./About.module.css";
import about from "../../assets/about.png";
import { ConsultationForm } from "../ConsultationForm/ConsultationForm";

export const About = () => {
  return (
    <section className={styles.about_section}>
      <div className="container">
        <div data-aos="fade-right" className={`bg1 ${styles.rectangle}`}>
          <p className={`${styles.rectangle__text} c2 montserrat h2 bold`}>
            Ми креативимо, маєм багато ідей, економимо ваші гроші та час,
            навчаэмо роботи з вашим сайтом, супроводжуэмо.
          </p>
        </div>
        <img data-aos="fade-left" className={styles.about__photo} src={about} alt="" />
        <div className={styles.content}>
          <h1 className={`h1-sm montserrat black ${styles.content__title}`}>
            ЧОМУ МИ?
          </h1>
          <p className={`h4 ${styles.content__text}`}>
            Унікальність, бездоганність, функціональність - це особливість наших
            сайтів та додатків. Ми не зупиняємось на досягнутому, а постійно
            пізнаємо нове, прагнучи до досконалості, що поєднує у собі творчість
            із передовими технологіями
          </p>
          <ConsultationForm blockWidth="" />
        </div>
      </div>
    </section>
  );
};
