import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import LoggedInNav from './logged_in_nav_bar';
import { fetchUsers } from '../../actions/user_actions/user_actions';
import { fetchLocation } from '../../actions/location_actions';



const msp = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    errors: state.errors.search
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    logOut: () => dispatch(logOut()),
    fetchUsers: (param) => dispatch(fetchUsers(param)),
    fetchLocation: (location) => dispatch(fetchLocation(location))
  };
};

export default connect(msp, mdp)(LoggedInNav);
