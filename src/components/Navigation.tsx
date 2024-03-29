import React from 'react';

function Navigation() {
  return (
    <ul className='nav'>
      <li>
        <a className='nav-item' href='#gallery'>
          art
        </a>
      </li>
      <li>
        <a className='nav-item' href='#about'>
          about
        </a>
      </li>
      <li>
        <a className='nav-item' href='#contact'>
          contact
        </a>
      </li>
      <li>
        <a className='nav-item' href='#cv'>
          cv
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
