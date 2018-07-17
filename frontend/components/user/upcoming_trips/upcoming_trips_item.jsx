import React from 'react';

class UpcomingTripsItem extends React.Component {

  render() {

    let firstName = "";
    let lastName = "";
    let city = "";
    let country = "";
    let startDate = ""
    let endDate = "";
    let hostImage = ""

    if (typeof this.props.host !== 'undefined') {
      firstName = this.props.host.first_name;
      lastName = this.props.host.last_name;
      city = this.props.host.location.city;
      country = this.props.host.location.country;
      if (this.props.host.imageUrl) {
        hostImage = this.props.host.imageUrl;
      } else {
        hostImage = window.profile_pic_placeholder;
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
        <img src={hostImage}/>
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



export default UpcomingTripsItem;
