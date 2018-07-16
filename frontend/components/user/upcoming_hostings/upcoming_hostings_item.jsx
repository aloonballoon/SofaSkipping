import React from 'react';

class UpcomingHostingsItem extends React.Component {


  render() {

    let firstName = "";
    let lastName = "";
    let city = "";
    let country = "";
    let startDate = ""
    let endDate = "";

    if (typeof this.props.guest !== 'undefined') {
      firstName = this.props.guest.first_name;
    }

    if (typeof this.props.hosting !== 'undefined') {
      startDate = this.props.hosting.start_date;
      endDate = this.props.hosting.end_date;
    }

    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    let firstDate = new Date(startDate);
    let secondDate = new Date(endDate);
    let diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

    return(
      <li>
        {diffDays} Days
        {firstName}
        {city}
        {country}
        {startDate}
        {endDate}
      </li>
    )
  }

}

export default UpcomingHostingsItem;
