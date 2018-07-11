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

  render() {


    let firstName;
    let lastName;
    let title;
    let submit;
    let text;
    let buttonLink;
    let switchPhrase;

    if (this.props.formType === 'signup') {
      title = 'Join SofaSkipping for free';
      firstName = <input key="3" id="login-signup-firstname-input" type="text" placeholder="First Name" onChange={this.handleChange('first_name')}/>;
      lastName = <input key="4" id="login-signup-lastname-input" type="text" placeholder="Last Name" onChange={this.handleChange('last_name')}/>;
      submit = "Join with Email";
      buttonLink = this.props.otherForm;
      switchPhrase = "Already a member?";
    } else {
      title = "Log in to SofaSkipping";
      submit = "Log In";
      text = "Don't have an account?";
      buttonLink = this.props.otherForm;
      switchPhrase = "Don't have an account?";
    }



    return (
      <div>
        <br/>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <header id="modal-title-container"><h1 id="session-header">{title}</h1></header>
          <br/>
          <div>
            {firstName}
            {lastName}
          </div>
          <br/>
            <input key="5" id="login-signup-input" type="text" placeholder="Email" onChange={this.handleChange('email')}/>
          <br/>
            <input id="login-signup-input" key="2"  type="password" placeholder="Password" onChange={this.handleChange('password')}/>
          <br/>
            <button id="session-button">{submit}</button>
          <br/>
          <p id="switch-phrase">
            {switchPhrase}
          </p>
              {buttonLink}
        </form>

      </div>


    );
  }
}

export default withRouter(SessionForm);
