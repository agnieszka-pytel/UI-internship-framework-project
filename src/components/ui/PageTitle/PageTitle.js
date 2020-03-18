import React, { Component } from 'react';
import styles from './PageTitle.module.scss';

export default class PageTitle extends Component {
  render() {
    const { pageName } = this.props;
    return <h1 className={styles.pageTitle}>{pageName}</h1>;
  }
}
