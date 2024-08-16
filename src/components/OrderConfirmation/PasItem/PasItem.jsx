import passengerTypes from '../../SeatsSelection/SelectionBlock/passengerTypes';
import pasTypesRus from '../../SeatsSelection/SelectionBlock/pasTypesRus';
import fieldNames from '../../PassengersSelection/PassengerCard/fieldNames';
import docTypes from '../../PassengersSelection/PassengerCard/docTypes';
import icon from './icon.svg';
import styles from './PasItem.module.scss';

const PasItem = ({ pas }) => {
   return (
      <article className={styles.card}>
         <div className={styles.left}>
            <img className={styles.icon} src={icon} alt="иконка - пассажир" />
            <div>
               {pas[fieldNames.passengerType] === passengerTypes.adults
                  ? pasTypesRus[passengerTypes.adults]
                  : pasTypesRus[passengerTypes.children]}
            </div>
         </div>
         <div className={styles.right}>
            <div className={styles.fullName}>
               {pas[fieldNames.lastName]} {pas[fieldNames.firstName]}{' '}
               {pas[fieldNames.fathersName]}
            </div>
            <div className={styles.data}>
               Пол {pas[fieldNames.gender] === 'true' ? 'мужской' : 'женский'}
            </div>
            <div className={styles.data}>
               Дата рождения {pas[fieldNames.dateOfBirth]}
            </div>
            <div className={styles.data}>
               <span>
                  {pas[fieldNames.docType] === docTypes.passport
                     ? `${docTypes.passportRus} РФ`
                     : docTypes.birthCertifRus}
               </span>
               <span>
                  {pas[fieldNames.docType] === docTypes.passport
                     ? ` ${pas[fieldNames.docSerialNumber]} ${
                          pas[fieldNames.docNumberPass]
                       }`
                     : ` ${pas[fieldNames.docNumberSertif]}`}
               </span>
            </div>
         </div>
      </article>
   );
};

export default PasItem;
