import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div class="header">
    <a href="#default" class="logo">Yassmine Boukari.</a>
    <div class="header-right">
    <a class="active" href="/#About">About</a>
      <a href="/#Projects">Projects</a>
      <a href="/#Certifications">Certifications</a>
      <a href="/#Contact">Contact</a>
    </div>
  </div>
    )
  }
