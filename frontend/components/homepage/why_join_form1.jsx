import React from 'react';

class WhyJoinForm1 extends React.Component {

  render() {
    return (
      <div className="smaller-why-join-pic-div">
        <img className="why-join-picture"  src={window.backpack_dude} />
        <br/>
        <br/>
        <h3>On Surfing</h3>
        <br/>
        <hr></hr>

        <p>
          "Couchsurfing has given me the opportunity to live very valuable and beautiful experiences. It's filled my journey with stories, people, and friends. It's given life to the places I visited, and I know that anywhere in the world I visit, I'll possibly have a good friend waiting for me!"
          <br/>
          <br/>
          - Andrea
          <br/>
          (Traveling in South America)
        </p>
      </div>

    );
  }
}

export default WhyJoinForm1;
