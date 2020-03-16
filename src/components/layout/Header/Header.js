import React, { Component } from 'react';
import HeaderContact from './HeaderContact';
import HeaderMenu from './HeaderMenu';

export default class Header extends Component {
  render() {
    return (
      <header>
        <HeaderContact />
        <HeaderMenu />
      </header>
    );
  }
}
