import React, { Component } from 'react';
import styles from './SectionTitle.module.scss';

export default class SectionTitle extends Component {
  render() {
    const { sectionName } = this.props;
    return <h2 className={styles.sectionTitle}>{sectionName}</h2>;
  }
}
