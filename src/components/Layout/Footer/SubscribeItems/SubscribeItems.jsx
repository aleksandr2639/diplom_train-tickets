import styles from './SubscribeItems.module.scss';
import youtube from '../icons/subscribe/youtube.svg';
import linkedin from '../icons/subscribe/linkedin.svg';
import google from '../icons/subscribe/google.svg';
import facebook from '../icons/subscribe/facebook.svg';
import twitter from '../icons/subscribe/twitter.svg';

const SubscribeItems = () => {
   return (
      <ul className={styles.subscribe}>
         <li className={styles.subscribe__icon}>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
               <img src={youtube} alt="youtube" />
            </a>
         </li>
         <li className={styles.subscribe__icon}>
            <a
               href="https://www.linkedin.com/"
               target="_blank"
               rel="noreferrer"
            >
               <img src={linkedin} alt="linkedin" />
            </a>
         </li>
         <li className={styles.subscribe__icon}>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
               <img src={google} alt="google" />
            </a>
         </li>
         <li className={styles.subscribe__icon}>
            <a
               href="https://www.facebook.com/"
               target="_blank"
               rel="noreferrer"
            >
               <img src={facebook} alt="facebook" />
            </a>
         </li>
         <li className={styles.subscribe__icon}>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
               <img src={twitter} alt="twitter" />
            </a>
         </li>
      </ul>
   );
};

export default SubscribeItems;
