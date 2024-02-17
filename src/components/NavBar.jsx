import React from 'react';

function NavBar() {
  return (
    <nav
      className='navbar'
      role='navigation'
      aria-label='main navigation'
      style={{ backgroundColor: '#ffb703' }}>
      <div className='navbar-brand'>
        <a
          className='navbar-item'
          href={`http://${window.location.hostname}:5173`}>
          <h1 className='is-size-4'> Recipe App</h1>
        </a>

        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
          style={{ color: 'black' }}>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-start'>
          <a className='navbar-item' href={'/'}>
            Home
          </a>

          <a className='navbar-item' href={'/categories'}>
            Categories
          </a>
          <a className='navbar-item'>Area</a>
          <a className='navbar-item'>Ingredients</a>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <input
              className='input is-info mx-.5'
              type='text'
              placeholder='Info input'
            />
            <button className='button is-info'>Search</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
