import { HashLink } from 'react-router-hash-link';
import Logo from '../Logo/Logo';
import styles from './HeaderNavigation.module.scss';

const HeaderNavigation = () => {
   return (
      <nav id="header-navigation">
         <Logo />
         <ul className={styles['nav-bar']}>
            <li className={styles['nav-bar__link']}>
               <HashLink smooth to={'#about'}>
                  <div>О нас</div>
               </HashLink>
            </li>
            <li className={styles['nav-bar__link']}>
               <HashLink smooth to={'#how-it-works'}>
                  <div>Как это работает</div>
               </HashLink>
            </li>
            <li className={styles['nav-bar__link']}>
               <HashLink smooth to={'#reviews'}>
                  <div>Отзывы</div>
               </HashLink>
            </li>
            <li className={styles['nav-bar__link']}>
               <HashLink smooth to={'#contacts'}>
                  <div>Контакты</div>
               </HashLink>
            </li>
         </ul>
      </nav>
   );
};

export default HeaderNavigation;
