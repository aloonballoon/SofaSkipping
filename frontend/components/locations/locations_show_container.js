import { connect } from 'react-redux';
import LocationShow from './location_show';
import { fetchLocation } from '../../actions/location_actions';

const msp = (state, ownProps) => {
  const hosts = state.search.searchTargets.map(id => {
    return state.entities.users[id];
  });

  const guests = state.guestSearch.searchTargets.map(id => {
    return state.entities.users[id];
  });
  const location = state.entities.locations[state.locationSearch.locationSearchTarget];


  return {
    hosts: hosts,
    locationName: ownProps.location.pathname.slice(10),
    guests: guests,
    location: location
  };
};

const mdp = dispatch => {
  return {
    fetchLocation: (location) => dispatch(fetchLocation(location))
  };
};

export default connect(msp, mdp)(LocationShow);
