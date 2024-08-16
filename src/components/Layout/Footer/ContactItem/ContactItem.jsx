import phone from '../icons/contact-us/phone.svg';
import email from '../icons/contact-us/email.svg';
import skype from '../icons/contact-us/skype.svg';
import location from '../icons/contact-us/location.svg';
import styles from './ContactItem.module.scss';

const ContactItem = () => {
   return (
      <ul className={styles.contact__list}>
         <li className={styles.contact__item}>
            <img className={styles.contact__icon} src={phone} alt="phone" />
            <div className={styles.contact__text}>
               <a href="tel:8 (800) 000 00 00">8 (800) 000 00 00</a>
            </div>
         </li>
         <li className={styles.contact__item}>
            <img className={styles.contact__icon} src={email} alt="email" />
            <div className={styles.contact__text}>
               <a href="mailto:inbox@mail.ru">inbox@mail.ru</a>
            </div>
         </li>
         <li className={styles.contact__item}>
            <img className={styles.contact__icon} src={skype} alt="skype" />
            <div className={styles.contact__text}>
               <a href="skype:tu.train.tickets">tu.train.tickets</a>
            </div>
         </li>
         <li className={styles.contact__item}>
            <img
               className={styles.contact__icon}
               src={location}
               alt="location"
            />
            <div className={styles.contact__text}>
               г. Москва
               <br />
               ул. Московская 27-35
               <br />
               555 555
               <br />
            </div>
         </li>
      </ul>
   );
};

export default ContactItem;
