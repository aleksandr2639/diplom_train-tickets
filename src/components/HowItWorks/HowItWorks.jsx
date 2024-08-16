import { HashLink } from 'react-router-hash-link';
import styles from './HowItWorks.module.scss';
import order from './img/order.svg';
import directions from './img/directions.svg';
import office from './img/office.svg';

const HowItWorks = () => {
   return (
      <div className={styles.how}>
         <div className={styles.how__wrapperTop}>
            <div className={styles.how__title}>как это работает</div>
            <HashLink smooth to={'#contacts'}>
               <button className={styles.how__btn} type="button">
                  Узнать больше
               </button>
            </HashLink>
         </div>
         <div className={styles.how__steps}>
            <div className={styles.card}>
               <div className={styles.card__icon}>
                  <img
                     className={styles.card__iconImage}
                     src={order}
                     alt="order"
                  />
               </div>
               <h5 className={styles.card__text}>Удобный заказ на сайте</h5>
            </div>
            <div className={styles.card}>
               <div className={styles.card__icon}>
                  <img
                     className={styles.card__iconImage}
                     src={office}
                     alt="office"
                  />
               </div>
               <h5 className={styles.card__text}>
                  Нет необходимости ехать в офис
               </h5>
            </div>
            <div className={styles.card}>
               <div className={styles.card__icon}>
                  <img
                     className={styles.card__iconImage}
                     src={directions}
                     alt="directions"
                  />
               </div>
               <h5 className={styles.card__text}>Огромный выбор направлений</h5>
            </div>
         </div>
      </div>
   );
};

export default HowItWorks;
