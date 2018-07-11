import { connect } from 'react-redux';
import { signUp } from '../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "signup"
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(signUp(user))
  };
};

export default connect(msp, mdp)(SessionForm);
