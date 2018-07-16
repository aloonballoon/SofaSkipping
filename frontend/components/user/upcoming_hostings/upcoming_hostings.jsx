import React from 'react';
import UpcomingHostingsItem from './upcoming_hostings_item';

class UpcomingHostings extends React.Component {

  componentDidMount() {
    this.props.fetchGuests(this.props.currentUser.id)
    this.props.fetchHostings(this.props.currentUser.id)
  }

  render() {

    // const guest = this.props.guests.map((guest, idx) => {
    //   return <UpcomingHostingsItem currentUser={this.props.currentUser} guest={guest} key={idx} />
    // })



    const hostingAndGuest = this.props.hostings.map(hosting => {
      
    })




    debugger

    return(
      <section className="upcoming-hostings-section">
      <header>
      My Upcoming Guests
      </header>
        <ul>
          {guest}
        </ul>
      </section>
    );
  }
}

export default UpcomingHostings;
