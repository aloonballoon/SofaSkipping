import { connect } from 'react-redux';
import Greetings from './greetings';
import { logOut } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';



const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greetings)
