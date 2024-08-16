import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import styles from './FooterLogo.module.scss';
import Logo from '../../Logo/Logo';
import goUp from '../icons/go-up.svg';

const FooterLogo = () => {
   const { pathname } = useLocation();

   return (
      <div className={styles.bottomNav}>
         <Logo />
         <HashLink smooth to={`${pathname}#header-navigation`}>
            <img
               className={styles.bottomNav__icon}
               src={goUp}
               alt="кнопка перехода наверх"
            />
         </HashLink>
         <div className={styles.bottomNav__year}>2024 WEB</div>
      </div>
   );
};

export default FooterLogo;
