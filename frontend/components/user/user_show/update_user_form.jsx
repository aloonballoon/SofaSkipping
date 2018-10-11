import React from 'react';

class UpdateUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <form className="user-update-form">
          <input className="user-update-firstname" type="text"/>
          <input className="user-update-lastname" type="text"/>
        </form>
      </React.Fragment>
    )
  }
}

export default UpdateUserForm;
