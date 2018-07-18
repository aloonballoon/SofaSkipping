import React from 'react';


class UserSearchIndexItems extends React.Component {


 render() {

   const user = this.props.user || {};
   const firstName = user.first_name;
   const lastName = user.last_name;
   const city = user.location.city;
   const country = user.location.country;

    return(
      <li>
        {firstName} {lastName}: {city}, {country}

      </li>
    )
  }
}

export default UserSearchIndexItems;
