import React, { useState, useRef, useEffect } from 'react';

import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <div className='links-container'>
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='social-icons'>
          <li>
            <a href='#'>{<FaTwitter />}</a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
