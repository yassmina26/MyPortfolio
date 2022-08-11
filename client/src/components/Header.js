import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
    <a href="#Home" class="logo">Yassmine Boukari.</a>
    <div className="header-right">
    <a className="active" href="/#About">About</a>
      <a href="/#Projects">Projects</a>
      <a href="/#Certifications">Certifications</a>
      <a href="/#Contact">Contact</a>
    </div>
  </div>
    )
  }
