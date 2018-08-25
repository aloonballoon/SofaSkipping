import React from 'react';

const UserDashMain = (props) => {

  return (
    <section className="dash-section">

      <header className="dash-main-header"><i className="em em-couch_and_lamp"></i>DIVE IN THE DEEPEST LAKES, CLIMB THE HIGHEST MOUNTAINS, SEE WHERE LORD OF THE RINGS WAS FILMED</header>


      <section className="dash-main-pictures-section">
          <div className="dash-main-picture1" className="dash-section-divs">
            <img id="mountain-image" src={window.mountain} />
            <div className="image-overlay">
              <div className="image-overlay-text">Visit Switzerland!</div>
            </div>
          </div>
          <div className="dash-main-picture2" className="dash-section-divs">
            <img id="lake-image" src={window.lake} />
            <div className="image-overlay">
              <div className="image-overlay-text">Visit Yosemite!</div>
            </div>
          </div>
          <div className="dash-main-picture3" className="dash-section-divs">
            <img id="esp-image" src={window.esp} />
            <div className="image-overlay">
              <div className="image-overlay-text">Visit New York!</div>
            </div>
          </div>
      </section>
    </section>
  );
};

export default UserDashMain;
