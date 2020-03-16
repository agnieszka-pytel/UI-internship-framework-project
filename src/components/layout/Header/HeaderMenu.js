import React, { Component } from 'react';
import Link from '@src/components/ui/Link/';
import Logo from '@src/assets/img/logo.png';
import SearchIcon from '@src/assets/img/search.png';
import UserIcon from '@src/assets/img/user.png';
import CartIcon from '@src/assets/img/cart-ico.png';
import styles from './HeaderMenu.module';

export default class HeaderMenu extends Component {
  render() {
    return (
      <section className={styles.section}>
        <figure className={styles.logoWrapper}>
          <img src={Logo} className={styles.logo}></img>
        </figure>
        <nav className={styles.menu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link linkName="Home" />
            </li>
            <li className={styles.menuItem}>
              <Link linkName="Products" />
            </li>
            <li className={styles.menuItem}>
              <Link linkName="Hot Deals" />
            </li>
            <li className={styles.menuItem}>
              <Link linkName="About" />
            </li>
            <li className={styles.menuItem}>
              <Link linkName="Contact" />
            </li>
          </ul>
        </nav>
        <div className={styles.iconWrapper}>
          <img src={SearchIcon} className={styles.icon}></img>
          <img src={UserIcon} className={styles.icon}></img>
          <img src={CartIcon} className={styles.icon}></img>
        </div>
      </section>
    );
  }
}
