import phone from '../icons/contact-us/phone.svg';
import email from '../icons/contact-us/email.svg';
import skype from '../icons/contact-us/skype.svg';
import location from '../icons/contact-us/location.svg';
import styles from './ContactItem.module.scss';
import Link from './Link';

const ContactItem = () => {
   return (
      <ul className={styles.contact__list}>
         <Link src={phone} alt="phone">
            <a href="tel:8 (800) 000 00 00">8 (800) 000 00 00</a>
         </Link>
         <Link src={email} alt="email">
            <a href="mailto:inbox@mail.ru">inbox@mail.ru</a>
         </Link>
         <Link src={skype} alt="skype">
            <a href="skype:tu.train.tickets">tu.train.tickets</a>
         </Link>
         <Link src={location} alt="location">
            г. Москва
            <br />
            ул. Московская 27-35
            <br />
            555 555
            <br />
         </Link>
      </ul>
   );
};

export default ContactItem;
