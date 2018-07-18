import React from 'react'
import UserSearchIndexItems from './user_search_index_items';


class UserSearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props
  }

  componentDidMount() {
    this.props.fetchUsers(this.props.searchParam);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps)
  }

  render() {
    const users = this.props.users.map((user, idx) => {
      return <UserSearchIndexItems user={user} key={idx} />
    });


    return (
      <ul>
        {users}
      </ul>
    )
  }
}

export default UserSearchIndex;
