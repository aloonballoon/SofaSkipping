import { connect } from 'react-redux';
import UserDashSidebar from './user_dash_sidebar';
import { updateStatus } from '../../actions/user_actions/user_actions';

const msp = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    updateStatus: (user) => dispatch(updateStatus(user))
  };
};

export default connect(msp, mdp)(UserDashSidebar);
