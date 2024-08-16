import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import links from '../../../data/links';

const Logo = () => {
   return (
      <Link to={links.main}>
         <div className={styles.logo}>Лого</div>
      </Link>
   );
};

export default Logo;
