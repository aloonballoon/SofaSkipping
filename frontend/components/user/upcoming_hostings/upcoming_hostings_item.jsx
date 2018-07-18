import React from 'react';
import { withRouter } from 'react-router';

class UpcomingHostingsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/membersearch/${this.props.guest.id}`);
  }


  render() {

    let firstName = "";
    let lastName = "";
    let city = "";
    let country = "";
    let startDate = ""
    let endDate = "";
    let guestImage = ""

    if (typeof this.props.guest !== 'undefined') {
      firstName = this.props.guest.first_name;
      lastName = this.props.guest.last_name;
      city = this.props.guest.location.city;
      country = this.props.guest.location.country;
      if (this.props.guest.imageUrl) {
        guestImage = this.props.guest.imageUrl;
      } else {
        guestImage = window.profile_pic_placeholder;
      }
    }


    if (typeof this.props.hosting !== 'undefined') {
      startDate = this.props.hosting.start_date;
      endDate = this.props.hosting.end_date;
    }
    let endDateArray = endDate.toString().split("").map(function(t){return parseInt(t)})
    let startDateArray = startDate.toString().split("").map(function(t){return parseInt(t)})

    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    let firstDate = new Date(startDate);
    let secondDate = new Date(endDate);
    let diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));


    let startYear = parseInt(startDate.slice(0,4));
    let startMonth = parseInt(startDate.slice(5,7));
    let startDay = parseInt(startDate.slice(8,10));
    let endYear = parseInt(endDate.slice(0,4));
    let endMonth = parseInt(endDate.slice(5,7));
    let endDay = parseInt(endDate.slice(8,10));

    const MONTHS = {1: "Januray", 2: "February", 3: "March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September", 10:"October", 11:"November", 12:"December"}

    startMonth = MONTHS[startMonth];
    endMonth = MONTHS[endMonth];


    return(
      <li>
        <img className="dash-main-guest-host-img" onClick={() => this.handleClick()} src={guestImage}/>
        <div className="upcoming-guests-li-holding-div">

           <article className="upcoming-guests-li-article">
           <header className="upcoming-guests-li-name-header">
           {firstName} {lastName}
           </header>
           <header className="upcoming-guests-location-header">
            {city}, {country}
           </header>
              <p className="upcoming-guests-li-p-tag">
              <i className="em em-house"></i>
                {diffDays} Nights <i className="em em-spiral_calendar_pad"></i>   {startMonth} {startDay}, {startYear} <i className="em em-arrow_right"></i> {endMonth} {endDay}, {endYear}
              </p>

            </article>
          </div>
      </li>
    )
  }

}

export default withRouter(UpcomingHostingsItem);
