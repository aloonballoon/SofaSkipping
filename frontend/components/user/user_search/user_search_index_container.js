import { connect } from 'react-redux';
import UserSearchIndex from './user_search_index';
import { fetchUsers, fetchUser } from '../../../actions/user_actions/user_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {

  const userSearchResults = state.search.searchTargets.map((id) => {
    return state.entities.users[id];
  });

  const searchParam = ownProps.location.pathname.slice(14);

  return {
    users: userSearchResults,
    searchParam: searchParam
  };
};


const mdp = (dispatch) => {
  return {
    fetchUsers: (params) => dispatch(fetchUsers(params)),
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};


export default connect(msp, mdp)(UserSearchIndex);
