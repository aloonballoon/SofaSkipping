import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../../actions/user_actions/user_actions';
import { createTrip } from '../../../actions/booking_actions';


const msp = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mdp = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    createTrip: (info) => dispatch(createTrip(info))
  };
};

export default connect(msp, mdp)(UserShow);
