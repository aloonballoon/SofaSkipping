import React from 'react';
import UpcomingHostingsItem from './upcoming_hostings_item';

class UpcomingHostings extends React.Component {

  componentDidMount() {
    this.props.fetchGuests(this.props.currentUser.id)
  }

  render() {


    const hosting = this.props.guests.map((guest, idx) => {
      return <UpcomingHostingsItem currentUser={this.props.currentUser} guest={guest} key={idx} />
    })
    return(
      <section className="upcoming-hostings-section">
      <header>
      My Upcoming Guests
      </header>
        <ul>
          {hosting}
        </ul>
      </section>
    );
  }
}

export default UpcomingHostings;
