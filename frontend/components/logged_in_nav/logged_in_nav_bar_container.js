import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import LoggedInNav from './logged_in_nav_bar';



const msp = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(msp, mdp)(LoggedInNav);
