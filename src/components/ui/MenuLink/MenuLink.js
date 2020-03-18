import React, { Component } from 'react';
import styles from './MenuLink.module.scss';
import { Link } from 'react-router-dom';

export default class MenuLink extends Component {
  render() {
    const { linkName } = this.props;
    const escapedLinkName = linkName.replace(' ', '_').toLowerCase();
    return (
      <Link
        className={styles.link}
        to={escapedLinkName == 'home' ? '/' : '/' + escapedLinkName}
      >
        {linkName}
      </Link>
    );
  }
}
