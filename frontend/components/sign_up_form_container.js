import { connect } from 'react-redux';
import { signUp } from '../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../actions/modal_actions';
import React from 'react';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "signup"
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signUp(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);
