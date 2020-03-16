import React, { Component } from 'react';
import Link from '../../ui/Link/';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <Link linkName="about us" />
          <Link linkName="contact us" />
          <Link linkName="support" />
        </div>
      </footer>
    );
  }
}
