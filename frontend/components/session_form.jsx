import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleSubmit(e) {

    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(user => this.props.history.push('/'));
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    let link;
    if (this.props.location.pathname === '/login') {
      link = <Link to="/signup">Log In</Link>;
    } else if (this.props.location.pathname === '/signup') {
      link = <Link to="/login">Sign Up</Link>;
    }

    const errors = this.props.errors;
    const errorsArr = errors.map((error, idx) => {
      return <li key={idx}>{error}</li>;
    });



    return (
      <div>
        <br/>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <ul>
            Errors: {errorsArr}
          </ul>
            <header>{this.props.formType}</header>
          <br/>
            {link}
          <br/>
            <input type="text" onChange={this.handleChange('username')}/>
          <br/>
            <input type="text" onChange={this.handleChange('password')}/>
          <br/>
            <button>SUBMIT</button>
        </form>

      </div>


    );
  }
}

export default withRouter(SessionForm);
