import React, { Component } from 'react';
import styles from './MainTitle.module.scss';

export default class MainTitle extends Component {
  render() {
    const { title } = this.props;
    return <h1 className={styles.mainTitle}>{title}</h1>;
  }
}
