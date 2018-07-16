import React from 'react';
import UserDashSidebarContainer from './user_dash_sidebar_container';
import UserDashMain from './user_dash_main';
import UpcomingHostingsContainer from './upcoming_hostings/upcoming_hostings_container';

class UserDashboard extends React.Component {

  render() {

    const user = this.props.user;

    return (
    <section className="user-dash-main-section">
        <UserDashSidebarContainer user={user} />
        <section>
          <UserDashMain />
          <UpcomingHostingsContainer />
        </section>
    </section>
    );
  }
}

export default UserDashboard;
