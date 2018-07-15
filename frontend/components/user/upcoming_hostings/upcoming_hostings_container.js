import { connect } from 'react-redux';
import UpcomingHostings from './upcoming_hostings';
import { fetchUser } from '../../../actions/user_actions/user_actions';

const msp = (state) => {
  return {
    hostings: state.entities.users[state.session.id].hostings,
    trips: state.entities.users[state.session.id].trips,
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    fetchUser: (user) => dispatch(fetchUser(user))
  };
};

export default connect(msp, mdp)(UpcomingHostings);
