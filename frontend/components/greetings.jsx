
import React from 'react';
import { Link } from 'react-router-dom';


class Greetings extends React.Component {


 render() {
   let loggedIn;
   if (typeof this.props.currentUser === "undefined") {
        loggedIn = false;
      } else {
        loggedIn = true;
      }

    let button;
    let message;
    let linkToSignUp;
    let linkToLogIn;
    if (loggedIn) {
      message = `Hello ${this.props.currentUser.username}.`;
      button = <button onClick={() => this.props.logOut()}>Log Out</button>;
    } else {
      message = "Hello there. Would you like to sign in?";
      linkToSignUp = <Link to="/signup">Sign Up</Link>;
      linkToLogIn = <Link to="/login">Log In</Link>;
    }


    return (
      <div>
        {message}
        <br/>
        {button}
        <br/>
        {linkToLogIn}
        <br/>
        {linkToSignUp}
      </div>


    );
  }
}

export default Greetings;
