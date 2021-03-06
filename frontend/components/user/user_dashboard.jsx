import React from 'react';
import UserDashSidebarContainer from './user_dash_sidebar_container';
import UserDashMain from './user_dash_main';
import UpcomingHostingsContainer from './upcoming_hostings/upcoming_hostings_container';
import UpcomingTripsContainer from './upcoming_trips/upcoming_trips_container';


class UserDashboard extends React.Component {

  render() {

    const user = this.props.user;

    return (
    <section className="user-dash-main-section">
        <UserDashSidebarContainer user={user} />
        <section className="dash-main-section">
          <UserDashMain />
          <UpcomingHostingsContainer />
          <UpcomingTripsContainer />
        </section>
        <div className="empty-div-dash-main"></div>
    </section>
    );
  }
}

export default UserDashboard;
