import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
      user = Object.assign({}, {username: this.state.username}, {password: this.state.password});
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

    const errors = this.props.errors;
    const errorsArr = errors.map((error, idx) => {
      return <li key={idx}>{error}</li>;
    });

    let firstName;
    let lastName;
    let email;
    if (this.props.formType === 'signup') {
      firstName = <input type="text" placeholder="First Name" onChange={this.handleChange('first_name')}/>;
      lastName = <input type="text" placeholder="Last Name" onChange={this.handleChange('last_name')}/>;
      email = <input type="text" placeholder="Email" onChange={this.handleChange('email')}/>;
    }



    return (
      <div>
        <br/>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <ul>
            Errors: {errorsArr}
          </ul>
            <header>{this.props.formType}</header>
          <br/>
          {firstName}
          {lastName}
          {email}
          <br/>
            <input type="text" placeholder="Username" onChange={this.handleChange('username')}/>
          <br/>
            <input type="text" placeholder="Password" onChange={this.handleChange('password')}/>
          <br/>
            <button>SUBMIT</button>
        </form>

      </div>


    );
  }
}

export default withRouter(SessionForm);
