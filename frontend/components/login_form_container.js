import { connect } from 'react-redux';
import { logIn } from '../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "login"
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(logIn(user))
  };
};

export default connect(msp, mdp)(SessionForm);
