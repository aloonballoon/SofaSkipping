import { connect } from 'react-redux';
import UpcomingHostings from './upcoming_hostings';
import { fetchUser, fetchGuests, fetchHostings } from '../../../actions/user_actions/user_actions';


const msp = (state) => {
  let guests = [];
  state.entities.users[state.session.id].guest_ids.map((id) => {
    if (state.entities.users[id]) {
      guests.push(state.entities.users[id]);
    }
  });

  const hostings = state.entities.users[state.session.id].hosting_ids.map((id) => {
    return state.entities.bookings.hostings[id];
  });

  // let hostings = state.entities.users[state.session.id].hostings.map((hosting) => {
  //   return hosting;
  // });

  return {
    guests: guests,
    currentUser: state.entities.users[state.session.id],
    hostings: hostings

  };
};

const mdp = (dispatch) => {
  return {
    fetchHostings: (hostId) => dispatch(fetchHostings(hostId)),
    fetchUser: (user) => dispatch(fetchUser(user)),
    fetchGuests: (id) => dispatch(fetchGuests(id))
  };
};

export default connect(msp, mdp)(UpcomingHostings);
