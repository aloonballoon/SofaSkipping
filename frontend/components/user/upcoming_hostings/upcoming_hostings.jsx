import React from 'react';
import UpcomingHostingsItem from './upcoming_hostings_item';

class UpcomingHostings extends React.Component {

  componentDidMount() {
    const guests = this.props.hostings.forEach(hosting => {
      if (hosting.host_id === this.props.currentUser.id) {
        this.props.fetchUser(hosting.traveler_id);
      }
    });
    debugger
  }

  render() {

    <UpcomingHostingsItem hosting={hosting} />

    return(
      <section>

      </section>
    );
  }
}

export default UpcomingHostings;
