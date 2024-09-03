import styles from './HowItWorks.module.scss';

const Card = ({ text, src, alt }) => {
   return (
      <div className={styles.card}>
         <div className={styles.card__icon}>
            <img className={styles.card__iconImage} src={src} alt={alt} />
         </div>
         <h5 className={styles.card__text}>{text}</h5>
      </div>
   );
};

export default Card;
