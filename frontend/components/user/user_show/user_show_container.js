import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser } from '../../../actions/user_actions/user_actions';
import { createTrip } from '../../../actions/booking_actions';
import { createReviews } from '../../../actions/review_actions';
import { fetchReviews } from '../../../actions/review_actions';


const msp = (state, ownProps) => {

  const user = state.entities.users[ownProps.match.params.userId] || {};
  const currentUser = state.entities.users[state.session.id] || {};
  const review_ids = user.received_review_ids || [];
  
  const reviews = review_ids.reduce((acc, id) => {
    if (state.entities.reviews[id]) acc.push(state.entities.reviews[id]);
    return acc;
  }, []);

  return {
    user: user,
    currentUser: currentUser,
    reviews: reviews
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
