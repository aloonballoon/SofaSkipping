import { connect } from 'react-redux';
import UpcomingHostings from './upcoming_hostings';
import { fetchUser } from '../../../actions/user_actions/user_actions';

const msp = (state) => {
  let nullGuests = [];
  return {
    hostings: state.entities.users[state.session.id].hostings,
    trips: state.entities.users[state.session.id].trips,
    currentUser: state.entities.users[state.session.id],
    guests: state.entities.users[state.session.id].guests,
    hosts: state.entities.users[state.session.id].hosts,
    homeLocation: state.entities.users[state.session.id].home_location
  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (user) => dispatch(fetchUser(user))
  };
};

export default connect(msp, mdp)(UpcomingHostings);
