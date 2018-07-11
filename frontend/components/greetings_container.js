import { connect } from 'react-redux';
import Greetings from './greetings';
import { logOut } from '../actions/session_actions'



const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: entities.users[session.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greetings)
