import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import LoggedInNav from './logged_in_nav_bar';
import { fetchUsers } from '../../actions/user_actions/user_actions';



const msp = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    logOut: () => dispatch(logOut()),
    fetchUsers: (param) => dispatch(fetchUsers(param))
  };
};

export default connect(msp, mdp)(LoggedInNav);
