import React from 'react';
import train from './img/train.svg';
import arrow from './img/arrow.svg';
import styles from './LeftPart.module.scss';

function LeftPart({ depTrain, arrTrain, depFrom, depTo, arrTo }) {
   return (
      <>
         <div className={styles.img}>
            <img src={train} alt="иконка поезда" />
         </div>
         <span className={styles['train-name']}>{depTrain}</span>
         <span className={styles['departure-city']}>
            {depFrom}
            <img
               className={styles['departure-arrow']}
               src={arrow}
               alt="иконка - стрелка"
            />
         </span>
         <span className={styles['arrival-city']}>
            {depTo}
            {arrTrain && (
               <img
                  className={styles['departure-arrow']}
                  src={arrow}
                  alt="иконка - стрелка"
               />
            )}
         </span>
         {arrTrain && (
            <>
               <span className={styles['arrival-city']}>{arrTo}</span>
               <span className={styles['train-name']}>{arrTrain}</span>
            </>
         )}
      </>
   );
}

export default LeftPart;
