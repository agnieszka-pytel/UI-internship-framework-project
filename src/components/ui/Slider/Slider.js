import React, { Component } from 'react';
import styles from './Slider.module.scss';
import MainTitle from '@src/components/ui/MainTitle';
import CartIcon from '@images/cart-ico.png';

export default class Slider extends Component {
  render() {
    return (
      <section className={styles.section}>
        <article className={styles.article}>
          <div className={styles.sliderNav}>
            <div className={styles.sliderPrev}></div>
            <div className={styles.sliderCurrent}></div>
            <div className={styles.sliderNext}></div>
          </div>
          <div className={styles.descriptionWrapper}>
            <MainTitle title="Full winter kit" />
            <p className={styles.subtitle}>
              Half Jacket + Skiny Trousers + Boot leather
            </p>
            <p className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry{' '}
            </p>
          </div>
          <div className={styles.detailsWrapper}>
            <p className={styles.price}>Price : 120$</p>
            <a className={styles.cta} href="">
              <img src={CartIcon} className={styles.ctaIcon} />
              <span className={styles.ctaText}>Order now</span>
            </a>
          </div>
        </article>
      </section>
    );
  }
}
