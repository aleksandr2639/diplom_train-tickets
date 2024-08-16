import React from 'react';
import { datetimeToTime, secsToTime } from '../../../../utils/timeFormatters';
import styles from './MiddlePart.module.scss';

function MiddlePart({
   depTime,
   depCity,
   depStation,
   duration,
   arrow,
   arrTime,
   arrCity,
   arrStation,
}) {
   return (
      <div className={styles.direction}>
         <div className={styles.direction__from}>
            <span className={styles.from__time}>{datetimeToTime(depTime)}</span>
            <span className={styles.from__city}>{depCity}</span>
            <span className={styles.from__station}>{depStation}</span>
         </div>
         <div className={styles.from__time}>
            <span className={styles.time__time}>{secsToTime(duration)}</span>
            <div className={styles.time__arrow}>
               <img src={arrow} alt="иконка - стрелка" />
            </div>
         </div>
         <div className={styles.direction__to}>
            <span className={styles.to__time}>{datetimeToTime(arrTime)}</span>
            <span className={styles.to__city}>{arrCity}</span>
            <span className={styles.to__station}>{arrStation}</span>
         </div>
      </div>
   );
}

export default MiddlePart;
