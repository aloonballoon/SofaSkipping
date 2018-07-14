import React from 'react';
import UserDashSidebarContainer from './user_dash_sidebar_container';
import UserDashMain from './user_dash_main';

class UserDashboard extends React.Component {

  render() {

    const user = this.props.user;

    return (
    <section className="user-dash-main-section">
        <UserDashSidebarContainer user={user} />
        <UserDashMain />
    </section>
    );
  }
}

export default UserDashboard;
