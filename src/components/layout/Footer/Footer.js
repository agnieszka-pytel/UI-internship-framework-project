import React, { Component } from 'react';
import MenuLink from '@src/components/ui/MenuLink';
import Logo from '@images/logo.png';
import PaymentIcons from '@images/payment-images.png';
import styles from './Footer.module';
import { FOOTER_MENU_LINKS } from '@src/assets/enums/links';

export default class Footer extends Component {
  renderMenuLinks() {
    return FOOTER_MENU_LINKS.map(link => (
      <li className={styles.menuItem} key={link}>
        <MenuLink className={styles.menuLink} linkName={link} />
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
