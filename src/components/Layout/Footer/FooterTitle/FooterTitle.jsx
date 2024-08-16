import styles from './FooterTitle.module.scss';

const FooterTitle = ({ text }) => {
   return <h3 className={styles.title}>{text}</h3>;
};
export default FooterTitle;
