import React from 'react';
import portrait_1x from '../assets/images/dom-portrait.png';
import portrait_1_5x from '../assets/images/dom-portrait@1.5x.png';
import portrait_2x from '../assets/images/dom-portrait@2x.png';

function makeSrcSet(imageArray=[]) {
  return imageArray.reduce((currentValue, srcObject, index) => {
    let {imagePath, resolution} = srcObject;

    if ( index > 0 ) {
      return currentValue = `${currentValue}, ${imagePath} ${resolution}`;
    }

    return currentValue = `${imagePath}`;

  }, '');
}


let headerImageSrcSet = [
  { imagePath: portrait_1x, resolution: '1x' },
  { imagePath: portrait_1_5x, resolution: '1.5x' },
  { imagePath: portrait_2x, resolution: '2x' },
];

const Welcome = () => {
  return (
    <div className="row">
      <div className="row-content">
        <header className="welcome hue-rotate">
          <div className="welcome__copy hue-text">
            <h1 className="title">Hey there, <br /><span className="text--bold">I'm Dominick!</span></h1>
            <h2 className="sub-title">I’m a <span className="text--bold">UX Engineer</span> and <span className="text--bold">Front End Developer.</span></h2>
            <h2 className="sub-title">I’m currently <span className="text--bold">working for IBM</span> on our <span className="text--bold">Master Data Management products</span> in the <span className="text--bold">Hybrid Cloud Design Org.</span></h2>
            <div className="welcome__background"></div>
            <img className="welcome__image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" srcSet={makeSrcSet(headerImageSrcSet)} />
          </div>
        </header>
        <p className="pull-quote">I believe that beautiful web design is more than pixel deep, so I craft code and architecture as polished as the interfaces I’m creating.</p>
      </div>
    </div>
  );
};

export default Welcome;
