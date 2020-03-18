import React, { Component } from 'react';
import MenuLink from '@src/components/ui/MenuLink/';
import Logo from '@images/logo.png';
import SearchIcon from '@images/search.png';
import UserIcon from '@images/user.png';
import CartIcon from '@images/cart-ico.png';
import styles from './HeaderMenu.module';
import { HEADER_MENU_LINKS } from '@src/assets/enums/links';

export default class HeaderMenu extends Component {
  renderMenuLinks() {
    return HEADER_MENU_LINKS.map(link => (
      <li className={styles.menuItem} key={link}>
        <MenuLink className={styles.menuLink} linkName={link} />
      </li>
    ));
  }
  render() {
    return (
      <section className={styles.section}>
        <figure className={styles.logoWrapper}>
          <img src={Logo} className={styles.logo}></img>
        </figure>
        <nav className={styles.menu}>
          <ul className={styles.menuList}>{this.renderMenuLinks()}</ul>
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
