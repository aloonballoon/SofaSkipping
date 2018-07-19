import { connect } from 'react-redux';
import LocationShow from './location_show';

const msp = (state, ownProps) => {

  const users = state.search.searchTargets.map(id => {
    return state.entities.users[id];
  });
  return {
    users: users,
    location: ownProps.location.pathname.slice(10)
  };
};

export default connect(msp)(LocationShow);
