import { HashLink } from 'react-router-hash-link';
import styles from './HowItWorks.module.scss';
import order from './img/order.svg';
import CardHowItWorks from './CardHowItWorks';
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
            <CardHowItWorks
               text="Удобный заказ на сайте"
               src={order}
               alt="order"
            />
            <CardHowItWorks
               text="Нет необходимости ехать в офис"
               src={office}
               alt="office"
            />
            <CardHowItWorks
               text="Огромный выбор направлений"
               src={directions}
               alt="directions"
            />
         </div>
      </div>
   );
};

export default HowItWorks;
