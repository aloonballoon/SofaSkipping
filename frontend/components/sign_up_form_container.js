import { connect } from 'react-redux';
import { signUp, logIn } from '../actions/session_actions';
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
    guestLogIn: (guest) => dispatch(logIn(guest)),
    otherForm: (
      <button id="other-form-button-switch" onClick={() => dispatch(openModal('login'))}>
        Log In
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);
