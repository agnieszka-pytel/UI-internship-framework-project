import React, { Component } from 'react';
import MailIcon from '@/assets/img/mail-ico.png';
import PhoneIcon from '@/assets/img/phone-ico.png';
import styles from './HeaderContact.module';

export default class HeaderContact extends Component {
  render() {
    return (
      <section className={styles.section}>
        <div className={styles.contactIconsWrapper}>
          <figure className={styles.contactFigure}>
            <img className={styles.contactIcon} src={MailIcon} />
            <span>info@shopy.com</span>
          </figure>
          <figure className={styles.contactFigure}>
            <img className={styles.contactIcon} src={PhoneIcon} />
            <span>996 - 5553 - 453</span>
          </figure>
        </div>
        <div className={styles.socialIconsWrapper}>
          <i className={styles.socialIcon} className="fab fa-facebook-f"></i>
          <i className={styles.socialIcon} className="fab fa-twitter"></i>
          <i className={styles.socialIcon} className="fab fa-google-plus-g"></i>
          <i className={styles.socialIcon} className="fab fa-instagram"></i>
        </div>
      </section>
    );
  }
}
