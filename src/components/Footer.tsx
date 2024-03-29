import React from 'react';

export default function Footer() {
  return (
    <footer>
      <span className='footerLink'>
        <a href='https://sarahphillipsdev.surge.sh' id='portfolio-link'>
          by Sarah Phillips{' '}
        </a>
      </span>

      <span className='footerLink'>
        <a href='https://github.com/snphillips/artportfolio' id='github-link'>
          <i className='fa fa-github' aria-hidden='true'></i>
        </a>
      </span>
    </footer>
  );
}
