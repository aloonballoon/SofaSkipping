import { connect } from 'react-redux';
import UserSearchIndex from './user_search_index';

const msp = (state) => {

  let userSearchResults = undefined;
  if (typeof state.search.searchTargets !== 'undefined') {
    userSearchResults = state.search.searchTargets.map((id) => {
      return state.entities.users[id];
    });
  }


  return {
    users: userSearchResults
  };
};

export default connect(msp)(UserSearchIndex);
