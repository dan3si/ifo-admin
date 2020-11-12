import React, { useState, useContext } from 'react';
import cn from 'classnames';
import styles from './HeaderModule.module.scss';
import logo from 'images/logo.png';
import { Link } from 'react-router-dom';
import scrollToBlock from 'global/ScrollToBlock';
import { AuthContext } from 'global/AuthContext';

export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  const { authToken } = useContext(AuthContext)
  
  return (
    <header className={cn({
      [styles.menuIsOpen]: menuIsOpen,
    })}>
      <div
        className={styles.burgerToggler}
        onClick={toggleMenu}
      >
        <span className={styles.burgerToggler__stripe}></span>
        <span className={styles.burgerToggler__stripe}></span>
      </div>
      
      <div className={styles.content}>
        <div className={styles.darker}></div>
        <div className={styles.container}>
          <Link
            to="/"
            onClick={() => {
              scrollToBlock('footer');
              toggleMenu();
            }}
          >
            <img
              src={logo}
              className={styles.logo}
              alt="IFO logo"
            />
          </Link>
          
          {authToken && (
            <nav className={styles.nav}>
              <Link
                className={styles.navLink}
                to="/addevents"
                onClick={() => {
                  scrollToBlock('addevents');
                  toggleMenu();
                }}
              >
                Add events
              </Link>

              <Link
                className={styles.navLink}
                to="/removeevents"
                onClick={() => {
                  scrollToBlock('removeevents');
                  toggleMenu();
                }}
              >
                Remove events
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
