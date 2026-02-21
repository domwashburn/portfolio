import React, { Component, PropTypes } from 'react';
import Typekit from 'react-typekit';

import Welcome from './components/Welcome';
import './scss/styles.scss';

class App extends Component {

  render() {
    return (
      <article className="">
        <Welcome />
        <main className="row">
          <div className="row-content">
        <nav className="social-links">
            <a className="social-links__link" href="https://www.linkedin.com/in/dominick-washburn-0a3b8742/" >
              <svg className="icon--linkedin" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43px" height="43px" viewBox="0 0 43 43">
                <path d="M36.6,36.6h-6.4v-10c0-2.4,0-5.4-3.3-5.4c-3.3,0-3.8,2.6-3.8,5.3v10.1h-6.4V16.1h6.1v2.8H23
                  c0.9-1.6,2.9-3.3,6-3.3c6.5,0,7.6,4.2,7.6,9.8V36.6L36.6,36.6z M9.6,13.3c-2,0-3.7-1.7-3.7-3.7c0-2,1.7-3.7,3.7-3.7
                  c2,0,3.7,1.7,3.7,3.7C13.3,11.7,11.6,13.3,9.6,13.3L9.6,13.3z M12.8,36.6H6.4V16.1h6.4V36.6L12.8,36.6z M39.8,0H3.2
                  C1.4,0,0,1.4,0,3.1v36.8C0,41.6,1.4,43,3.2,43h36.6c1.8,0,3.2-1.4,3.2-3.1V3.1C43,1.4,41.6,0,39.8,0L39.8,0z"/>
              </svg>
            </a>
            <a className="social-links__link"  href="https://github.com/domwashburn" >
              <svg className="icon--github" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43.9px" height="42.9px" viewBox="0 0 43.9 42.9">
                <path d="M22,0C9.8,0,0,9.8,0,22c0,9.7,6.3,17.9,15.1,20.8c1.2,0.1,1.5-0.4,1.5-1V38c-6.2,1.3-7.5-2.9-7.5-2.9
                  c-1-2.5-2.5-3.2-2.5-3.2c-2.1-1.3,0.1-1.3,0.1-1.3c2.2,0.1,3.4,2.2,3.4,2.2c1.9,3.4,5.1,2.3,6.5,1.8c0.1-1.5,0.7-2.3,1.5-2.9
                  c-4.8-0.6-10-2.5-10-10.9c0-2.3,0.9-4.4,2.2-5.9C10,14.2,9.2,12,10.4,9c0,0,1.9-0.6,6,2.2c1.8-0.4,3.7-0.7,5.6-0.7s3.8,0.3,5.6,0.7
                  c4.3-2.8,6-2.2,6-2.2c1.2,3.1,0.4,5.3,0.1,5.9c1.5,1.5,2.2,3.5,2.2,5.9c0,8.5-5.1,10.3-10,10.9c0.7,0.7,1.5,2.1,1.5,4.1v6
                  c0,0.6,0.4,1.3,1.5,1c8.8-2.9,15-11.2,15-20.8C44,9.8,34.2,0,22,0z"/>
              </svg>
            </a>
          </nav>
        </div>
        </main>
        <Typekit kitId="fjf7erl" />
      </article>
    );
  }
}

export default App;
