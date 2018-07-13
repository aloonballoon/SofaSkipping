import React from 'react';
import UserDashSidebar from './user_dash_sidebar';
import UserDashMain from './user_dash_main';

class UserDashboard extends React.Component {

  render() {

    const user = this.props.user;

    return (
    <body>
        <UserDashSidebar user={user} />
        <UserDashMain />
    </body>
    );
  }
}

export default UserDashboard;
