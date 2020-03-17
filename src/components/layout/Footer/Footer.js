import React, { Component } from 'react';
import Link from '@src/components/ui/Link';
import Logo from '@src/assets/img/logo.png';
import PaymentIcons from '@src/assets/img/payment-images.png';
import styles from './Footer.module';
import { FOOTER_MENU_LINKS } from '@src/assets/constants';

export default class Footer extends Component {
  renderMenuLinks() {
    return FOOTER_MENU_LINKS.map(link => (
      <li className={styles.menuItem} key={link}>
        <Link className={styles.menuLink} linkName={link} />
      </li>
    ));
  }

  render() {
    return (
      <footer className={styles.footer}>
        <figure className={styles.logoWrapper}>
          <img src={Logo} className={styles.logo} />
          <span className={styles.copyright}>
            shopy &copy; 2015 . your copy right here
          </span>
        </figure>
        <nav className={styles.menu}>
          <ul className={styles.menuList}>{this.renderMenuLinks()}</ul>
        </nav>
        <div className={styles.paymentWrapper}>
          <span className={styles.title}>Payment methods</span>
          <img src={PaymentIcons} className={styles.paymentIcons}></img>
        </div>
      </footer>
    );
  }
}
