import React from 'react';
import UpcomingHostingsItem from './upcoming_hostings_item';

class UpcomingHostings extends React.Component {

  componentDidMount() {
    this.props.fetchGuests(this.props.currentUser.id)
    this.props.fetchHostings(this.props.currentUser.id)
  }

  render() {

    return(
      <section className="upcoming-hostings-section">
      <header>
      My Upcoming Guests
      </header>
        <ul>

        </ul>
      </section>
    );
  }
}

export default UpcomingHostings;
