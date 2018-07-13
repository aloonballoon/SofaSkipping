import React from 'react';
import UserDashSidebar from './user_dash_sidebar';
import UserDashMain from './user_dash_main';

class UserDashboard extends React.Component {

  render() {

    const user = this.props.user;

    return (
    <section className="user-dash-main-section">
        <UserDashSidebar user={user} />
        <UserDashMain />
    </section>
    );
  }
}

export default UserDashboard;
