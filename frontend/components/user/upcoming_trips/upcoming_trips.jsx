import React from 'react';
import UpcomingTripsItem from './upcoming_trips_item';

class UpcomingTrips extends React.Component {

  componentDidMount() {
    this.props.fetchHosts(this.props.currentUser.id)
    this.props.fetchTrips(this.props.currentUser.id)
  }

  render() {

    const tripItem = this.props.trips.map((trip, idx) => {
      let host = null;
      if (typeof trip === "undefined") {
        host = null;
      } else {
        host = this.props.users[trip.host_id]
        return <UpcomingTripsItem key={idx} host={host} trip={trip} />
      }
    })

    return(
      <section className="upcoming-hostings-section">
      <header className="upcoming-trips-section-header">
      <i className="em em-airplane"></i>
      My Travel Plans
      </header>
        <ul>
          {tripItem}
        </ul>
      </section>
    );
  }
}
export default UpcomingTrips;
