import styles from './Reviews.module.scss';
import openQuote from './img/quote-open.svg';
import closeQuote from './img/quote-close.svg';
import kate from './img/women.png';
import evg from './img/men.png';

const Reviews = () => {
   return (
      <div className={styles.reviews} id="reviews">
         <span className={styles.reviews__title}>отзывы</span>
         <div className={styles.reviews__cards}>
            <div className={styles.card}>
               <div className={styles.card__avatar}>
                  <img src={kate} alt="аватар" />
               </div>
               <div className={styles.card__content}>
                  <div className={styles.card__title}>Екатерина Вальнова</div>
                  <div className={styles.card__text}>
                     <span>
                        <img
                           className={styles.card__open}
                           src={openQuote}
                           alt="opening quote"
                        />
                        Доброжелательные подсказки <br />
                        на всех этапах помогут правильно заполнить поля и без
                        затруднений купить авиа или ж/д билет, даже если вы
                        заказываете онлайн билет впервые.
                        <img
                           className={styles.card__close}
                           src={closeQuote}
                           alt="closing quote"
                        />
                     </span>
                  </div>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.card__avatar}>
                  <img src={evg} alt="аватар" />
               </div>
               <div className={styles.card__content}>
                  <div className={styles.card__title}>Евгений Стрыкало</div>
                  <div className={styles.card__text}>
                     <span>
                        <img
                           className={styles.card__open}
                           src={openQuote}
                           alt="opening quote"
                        />
                        СМС-сопровождение до посадки <br />
                        Сразу после оплаты ж/д билетов и за 3 часа до
                        отправления мы пришлем вам СМС-напоминание о поездке.
                        <img
                           className={styles.card__close}
                           src={closeQuote}
                           alt="closing quote"
                        />
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Reviews;
