import styles from './Reviews.module.scss';
import kate from './img/women.png';
import evg from './img/men.png';
import CardReviews from './CardReviews';

const Reviews = () => {
   return (
      <div className={styles.reviews} id="reviews">
         <span className={styles.reviews__title}>отзывы</span>
         <div className={styles.reviews__cards}>
            <CardReviews
               src={kate}
               title="Екатерина Вальнова"
               text="Доброжелательные подсказки <br />
                  на всех этапах помогут правильно заполнить поля и без
                  затруднений купить авиа или ж/д билет, даже если вы
                  заказываете онлайн билет впервые."
            />
            <CardReviews
               src={evg}
               title="Евгений Стрыкало"
               text="СМС-сопровождение до посадки <br />
                        Сразу после оплаты ж/д билетов и за 3 часа до
                        отправления мы пришлем вам СМС-напоминание о поездке."
            />
         </div>
      </div>
   );
};

export default Reviews;
