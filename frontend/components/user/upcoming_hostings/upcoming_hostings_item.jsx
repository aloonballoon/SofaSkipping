import React from 'react';

class UpcomingHostingsItem extends React.Component {


  render() {
    return(
      <li>
        {this.props.guest.first_name}
        {this.props.guest.last_name}
        {this.props.guest.location.city}
        {this.props.guest.location.country}
      </li>
    )
  }

}

export default UpcomingHostingsItem;
