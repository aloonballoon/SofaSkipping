import React from 'react';
import Welcome from './welcome';
import WhyJoin from './why_join';

class HomeScreen extends React.Component {

  render() {

    return (
      <div>
        <article id="welcome-message">
            <img id="home-couch-img" src={window.home_couch} />
            <section className='welcome-text'><Welcome /></section>
        </article>
        <article className="why-join-section">
            <WhyJoin />
        </article>
      </div>
    );
  }
}

export default HomeScreen;
