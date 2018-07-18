import React from 'react';


class UserSearchIndexItems extends React.Component {


 render() {
   
   const user = this.props.user;
   let firstName;
   if (typeof this.props.user !== 'undefined') {
     firstName = user.first_name;
   }

    return(
      <li>
        {firstName}
      </li>
    )
  }
}

export default UserSearchIndexItems;
