import React from 'react';

class UserDashboard extends React.Component {

  render() {

    const user = this.props.user;

    return (
      <div>
        {user.first_name}
        {user.last_name}
        {user.username}
      </div>
    );
  }
}

export default UserDashboard;
