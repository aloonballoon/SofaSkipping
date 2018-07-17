import React from 'react'
import UserSearchIndexItems from './user_search_index_items';


class UserSearchIndex extends React.Component {


  render() {
    let users;
    if (typeof this.props.users !== 'undefined') {
      let users = this.props.users.map((user, idx) => {
        return <UserSearchIndexItems user={user} key={idx} />
      });
    }
    debugger

    return (
      <div>
       <ul>
      HELP
       </ul>
      </div>
    )
  }
}

export default UserSearchIndex;
