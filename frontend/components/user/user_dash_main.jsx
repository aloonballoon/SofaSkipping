import React from 'react';

const UserDashMain = (props) => {

  return (
    <section className="dash-section">
      <i className="em em-couch_and_lamp"></i>
      <header className="dash-main-header">DIVE IN THE DEEPEST LAKES, CLIMB THE HIGHEST MOUNTAINS, SEE WHERE LOTR WAS FILMED</header>
      <div>
        <img id="mountain-image" src={window.mountain} />
      </div>
      <div>
        <img id="lake-image" src={window.lake} />
      </div>
      <div>
        <img id="esp-image" src={window.esp} />
      </div>
    </section>
  );
};

export default UserDashMain;
