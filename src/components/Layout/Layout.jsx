import HeaderNavigation from './Navigation/HeaderNavigation';
import Footer from './Footer/Footer';
import styles from './Layout.module.scss';

const Layout = ({ pic, children, body }) => {
   return (
      <div className={styles.wrapper}>
         <header className={`${styles.header} ${styles[`header-${pic}`]}`}>
            <HeaderNavigation />
            {children}
         </header>
         <main>{body}</main>
         <Footer />
      </div>
   );
};

export default Layout;
