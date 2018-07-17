import React from 'react';
import UpcomingHostingsItem from './upcoming_hostings_item';

class UpcomingHostings extends React.Component {

  componentDidMount() {
    this.props.fetchGuests(this.props.currentUser.id)
    this.props.fetchHostings(this.props.currentUser.id)
  }

  render() {

    const hostingItem = this.props.hostings.map((hosting, idx) => {
      let guest = null;
      if (typeof hosting === "undefined") {
        guest = null;
      } else {
        guest = this.props.users[hosting.guest_id]
        return <UpcomingHostingsItem key={idx} guest={guest} hosting={hosting} />
      }
    })

    return(

      <section className="upcoming-hostings-section">
      <header className="upcoming-hostings-section-header">
      <i className="em em-house_with_garden"></i>
      My Upcoming Guests
      </header>
        <ul>
        {hostingItem}
        </ul>
      </section>
    );
  }
}
export default UpcomingHostings;
