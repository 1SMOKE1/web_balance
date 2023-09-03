import styles from "./About.module.css";
import about from '../../assets/about.png';


export const About = () => {
  return (
    <section className={styles.about_section}>
      <div className="container">
        <div className={`bg1 ${styles.rectangle}`}>
          <p className={`${styles.rectangle_text} c2 montserrat h2 bold`}>
            Ми креативимо, маєм багато ідей, економимо ваші гроші та час,
            навчаэмо роботи з вашим сайтом, супроводжуэмо.
          </p>
        </div>
        <img className={styles.about_photo} src={about} alt="" />
      </div>
    </section>
  );
};
