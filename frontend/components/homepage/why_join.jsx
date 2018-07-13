import React from 'react';
import WhyJoinForm1 from './why_join_form1';
import WhyJoinForm2 from './why_join_form2';
import WhyJoinForm3 from './why_join_form3';

class WhyJoin extends React.Component {

  render() {

    return (
      <div className='why-join-div'>
        <h1 className="why-join-text">Why Join?</h1>
        <hr className="main-hr"></hr>
        <article className="why-join-form-article">
          <div className='why-join-pic-div'>
            <WhyJoinForm1 />
          </div>
          <div className='why-join-pic-div'>
            <WhyJoinForm2 />
          </div>
          <div className='why-join-pic-div'>
            <WhyJoinForm3 />
          </div>
        </article>
      </div>
    );
  }
}

export default WhyJoin;
