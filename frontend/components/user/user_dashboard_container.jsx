import { connect } from 'react-redux';
import UserDashboard from './user_dashboard';



const msp = (state, ownProps) => {
  let user;
  if (typeof state.entities.users[state.session.id] === 'undefined') {
    user = null;
  } else {
    user = state.entities.users[state.session.id];
  }
  return {
    user: user
  };
};

export default connect(msp)(UserDashboard);
