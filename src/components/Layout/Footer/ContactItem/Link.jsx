import styles from './ContactItem.module.scss';

const Link = ({ src, alt, children }) => {
   return (
      <li className={styles.contact__item}>
         <img className={styles.contact__icon} src={src} alt={alt} />
         <div className={styles.contact__text}>{children}</div>
      </li>
   );
};

export default Link;
