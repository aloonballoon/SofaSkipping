import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGuest = this.handleGuest.bind(this);


  }
  handleSubmit(e) {

    e.preventDefault();
    let user;
    if (this.props.formType === 'login') {
      user = Object.assign({}, {email: this.state.email}, {password: this.state.password});
    } else if (this.props.formType === 'signup') {
      user = Object.assign({}, this.state);
    }
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleGuest(e) {
    e.preventDefault();
    const guestUser = {email: 'guest@guest.com', password: '123456'};
    if (this.props.formType === 'signup') {
      this.props.guestLogIn(guestUser).then(this.props.closeModal);
    } else if (this.props.formType === 'login') {
      this.props.processForm(guestUser).then(this.props.closeModal);
    }
  }


  render() {


    let firstName;
    let lastName;
    let title;
    let submit;
    let text;
    let buttonLink;
    let switchPhrase;
    let email;

    if (this.props.formType === 'signup') {
      title = 'Join SofaSkipping for free';

      firstName = <input required key="3" id="login-signup-firstname-input" type="text" placeholder="  First Name" onChange={this.handleChange('first_name')}/>;

      lastName = <input required key="4" id="login-signup-lastname-input" type="text" placeholder="  Last Name" onChange={this.handleChange('last_name')}/>;

      submit = "Join with Email";
      buttonLink = this.props.otherForm;
      switchPhrase = "Already a member?";

      email = <input key="5" className="login-signup-input" type="email" placeholder="Email" onChange={this.handleChange('email')}/>;

    } else {
      title = "Log in to SofaSkipping";
      submit = "Log In";
      text = "Don't have an account?";
      buttonLink = this.props.otherForm;
      switchPhrase = "Don't have an account?";

      email = <input key="5" className="login-signup-input" type="text" placeholder="  Email" onChange={this.handleChange('email')}/>;
    }

    let errors;
    if (this.props.errors.length === 0) {
      errors = <p></p>;
    } else {
      errors = <p id="error-message"><p id="err-mes">{this.props.errors[0]}</p></p>;
      setTimeout(() => this.props.errors = []);
    }


    return (
      <div>
        <br/>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <header id="modal-title-container"><h1 id="session-header">{title}</h1></header>
          <br/>
            {errors}
          <br/>
          <section>
            {firstName}
            {lastName}
          </section>
          <br/>
           {email}
          <br/>
            <input required minLength="6" className="login-signup-input" key="2"  type="password" placeholder="Password" onChange={this.handleChange('password')}/>
          <br/>
            <button id="session-button">{submit}</button>
          <br/>
          <p id="switch-phrase">
            {switchPhrase}
          </p>
            {buttonLink}
          <br/>
          <button id="guest-button" onClick={(e) => this.handleGuest(e)}>Guest Log In</button>
        </form>
      </div>


    );
  }
}

export default withRouter(SessionForm);
