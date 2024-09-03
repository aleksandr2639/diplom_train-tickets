import openQuote from './img/quote-open.svg';
import closeQuote from './img/quote-close.svg';
import styles from './Reviews.module.scss';

const CardReviews = ({ src, title, text }) => {
   return (
      <div className={styles.card}>
         <div className={styles.card__avatar}>
            <img src={src} alt="аватар" />
         </div>
         <div className={styles.card__content}>
            <div className={styles.card__title}>{title}</div>
            <div className={styles.card__text}>
               <span>
                  <img
                     className={styles.card__open}
                     src={openQuote}
                     alt="opening quote"
                  />
                  {text}
                  <img
                     className={styles.card__close}
                     src={closeQuote}
                     alt="closing quote"
                  />
               </span>
            </div>
         </div>
      </div>
   );
};

export default CardReviews;
