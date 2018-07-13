import { connect } from 'react-redux';



const msp = (state, ownProps) => {
  return {
    user: state.entitites.users[state.session.id]
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(msp, mdp)(UserShow);
