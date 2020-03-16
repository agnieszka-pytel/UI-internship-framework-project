import React, { Component } from 'react';
import styles from './Link.module.scss';

export default class Link extends Component {
  render() {
    const { linkName } = this.props;
    return (
      <a className={styles.link} href="#">
        {linkName}
      </a>
    );
  }
}
