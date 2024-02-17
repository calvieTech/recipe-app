import React from 'react';
import Banner from '../assets/andy-chilton-0JFveX0c778-unsplash.jpg';

function Home() {
  return (
    <main
      className='hero is-fullheight-with-navbar'
      style={{ backgroundColor: '#023047' }}>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <img
            src={Banner}
            className='image is-16by9'
            style={{ padding: '0' }}></img>
        </div>
      </div>
    </main>
  );
}

export default Home;
