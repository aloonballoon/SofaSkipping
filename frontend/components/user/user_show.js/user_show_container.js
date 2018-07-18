import { connect } from 'react-redux';
import UserShow from './user_show';
import { withRouter } 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mdp = dispatch => {
  return {
    fetchUser: (user) => dispatch(fetchUser(user))
  };
};

export default withRouter(connect(msp, mdp)(UserShow));
