
import React from 'react';
import { Link } from 'react-router-dom';


class Greetings extends React.Component {


 render() {

   const sessionLinks = () => {
     return (
      <nav className="login-signup" >
        <button id="join-button" onClick={() => this.props.openModal('signup')}>Join</button>
        <button id="login-button" onClick={() => this.props.openModal('login')}>Log In</button>
      </nav>
    );
   };

   let loggedIn;
   if (typeof this.props.currentUser === "undefined") {
        loggedIn = false;
      } else {
        loggedIn = true;
      }

    let button;
    let message;
    if (loggedIn) {
      message = `Hello ${this.props.currentUser.first_name}.`;
      button = <button onClick={() => this.props.logOut()}>Log Out</button>;
    }


    return (
      <header className="top-nav">
        <article id="logo">
          SofaSkipping
        </article>
        {sessionLinks()}
        {button}
      </header>


    );
  }
}

export default Greetings;
