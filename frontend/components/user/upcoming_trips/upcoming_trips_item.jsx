import React from 'react';
import { withRouter } from 'react-router'

class UpcomingTripsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleLocationClick = this.handleLocationClick.bind(this);
  }

  handleUserClick() {
    this.props.history.push(`/members/${this.props.host.id}`);
  }

  handleLocationClick() {
    this.props.history.push(`/location/${this.props.host.location.city}`);
  }

  render() {
    let firstName = "";
    let lastName = "";
    let city = "";
    let country = "";
    let startDate = ""
    let endDate = "";
    let hostImage = ""
    let confirmed;

    if (typeof this.props.host !== 'undefined') {
      firstName = this.props.host.first_name;
      lastName = this.props.host.last_name;
      city = this.props.host.location.city;
      country = this.props.host.location.country;
      if (this.props.host.photoUrl) {
        hostImage = this.props.host.photoUrl;
      } else {
        hostImage = window.profile_pic_placeholder;
      }
      if (this.props.trip.confirmed === false) {
        confirmed = <div className="upcoming-trip-pending-div">PENDING</div>
      }
    }


    if (typeof this.props.trip !== 'undefined') {
      startDate = this.props.trip.start_date;
      endDate = this.props.trip.end_date;
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
        <img className="dash-main-guest-host-img" onClick={() => this.handleUserClick()} src={hostImage}/>
        <div className="upcoming-guests-li-holding-div">
            {confirmed}
           <article className="upcoming-guests-li-article">
           <header className="upcoming-guests-li-name-header">
            <div className="upcoming-guests-li-name-header-div" onClick={() => this.handleUserClick()}>{firstName} {lastName}</div>
           </header>
           <header className="upcoming-guests-location-header" onClick={() => this.handleLocationClick()}>
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



export default withRouter(UpcomingTripsItem);
