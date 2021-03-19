import React from 'react';
import logo from './logo.png';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='' style={{ width: '300px' }} />
    </div>
  );
};

export default Header;
