import styles from './ConsultationForm.module.css';

export const ConsultationForm = ({blockWidth}: {blockWidth: string}) => {
  return (
    <div className={`${styles.form__block}`} style={{width: blockWidth}}>
      <input className="bg3 p bold" type="text" placeholder="Ваше ім'я?" />
      <input
        className="bg3 p bold"
        type="text"
        placeholder="Номер телефону..."
      />
      <button className="bg4 c2 p bold">Замовити дзвінок</button>
    </div>
  );
};
