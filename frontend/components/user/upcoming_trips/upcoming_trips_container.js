import { connect } from 'react-redux';
import UpcomingTrips from './upcoming_trips';
import { fetchUser, fetchHosts, fetchHostings, fetchTrips } from '../../../actions/user_actions/user_actions';
import { withRouter } from 'react-router';


const msp = (state) => {
  let hosts = [];
  state.entities.users[state.session.id].host_ids.map((id) => {
    if (state.entities.users[id]) {
      hosts.push(state.entities.users[id]);
    }
  });
  
  const trips = state.entities.users[state.session.id].trip_ids.map((id) => {
    return state.entities.bookings.trips[id];
  });

  return {
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
    trips: trips

  };
};

const mdp = (dispatch) => {
  return {
    fetchTrips: (guestId) => dispatch(fetchTrips(guestId)),
    fetchUser: (user) => dispatch(fetchUser(user)),
    fetchHosts: (id) => dispatch(fetchHosts(id))
  };
};

export default connect(msp, mdp)(UpcomingTrips);
