
import React from 'react';
import { Link } from 'react-router-dom';


class Greetings extends React.Component {


 render() {
   let button;

   const sessionLinks = () => {
     return (
      <nav className="login-signup" >
        <button id="join-button" onClick={() => this.props.openModal('signup')}>Join</button>
        <button id="login-button" onClick={() => this.props.openModal('login')}>Log In</button>
      </nav>
    );
   };

   loggedIn = this.props.currentUser !== undefined;
   button = loggedIn ? <button onClick={() => this.props.logOut()}>Log Out</button> : null;

    return (
      <header className="top-nav">
        <article className="logo">
          SofaSkipping
        </article>
        {sessionLinks()}
        {button}
      </header>
    );
  }
}

export default Greetings;
