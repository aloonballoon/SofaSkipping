import { connect } from 'react-redux';
import UpcomingHostings from './upcoming_hostings';
import { fetchUser, fetchGuests, fetchHostings } from '../../../actions/user_actions/user_actions';
import { cancelHosting, confirmHosting } from '../../../actions/booking_actions';


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


  return {
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
    hostings: hostings

  };
};

const mdp = (dispatch) => {
  return {
    fetchHostings: (hostId) => dispatch(fetchHostings(hostId)),
    fetchUser: (user) => dispatch(fetchUser(user)),
    fetchGuests: (id) => dispatch(fetchGuests(id)),
    cancelHosting: (id) => dispatch(cancelHosting(id)),
    confirmHosting: (id) => dispatch(confirmHosting(id))
  };
};

export default connect(msp, mdp)(UpcomingHostings);
