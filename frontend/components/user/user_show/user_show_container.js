import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../../actions/user_actions/user_actions';
import { createTrip } from '../../../actions/booking_actions';
import { createReviews } from '../../../actions/review_actions';
import { fetchReviews } from '../../../actions/review_actions';


const msp = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    createTrip: (info) => dispatch(createTrip(info)),
    createReviews: (data) => dispatch(createReviews(data)),
    fetchReviews: (userId) => dispatch(fetchReviews(userId))
  };
};

export default connect(msp, mdp)(UserShow);
