import { connect } from 'react-redux';
import LocationShow from './location_show';
import { fetchLocation } from '../../actions/location_actions';

const msp = (state, ownProps) => {

  const users = state.search.searchTargets.map(id => {
    return state.entities.users[id];
  });

  const guests = state.guestSearch.searchTargets.map(id => {
    return state.entities.users[id];
  });

  return {
    users: users,
    location: ownProps.location.pathname.slice(10),
    guests: guests
  };
};

const mdp = dispatch => {
  return {
    fetchLocation: (location) => dispatch(fetchLocation(location))
  };
};

export default connect(msp, mdp)(LocationShow);
