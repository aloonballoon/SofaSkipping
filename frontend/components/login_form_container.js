import { connect } from 'react-redux';
import { logIn } from '../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../actions/modal_actions';
import React from 'react';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "login"
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(logIn(user)),
    otherForm: (
      <button id="other-form-button-switch" onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(SessionForm);
