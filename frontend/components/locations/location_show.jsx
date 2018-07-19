import React from 'react';
import LocationUserShow from './location_user_show';

class LocationShow extends React.Component {

  componentDidMount() {
    this.props.fetchLocation(this.props.location);
  }


  render() {

    const locationName = this.props.location
    const locationUser = this.props.users.map(user => {
      return <LocationUserShow user={user} key={user.id} />
    })

    return(
      <div className="location-show-entire-container-div">

        <header className="location-show-background-image-header">
          <h1 className="location-show-title-h1">
            {locationName}
          </h1>
          <img className="location-show-background-image" src={window.beautiful_beach}/>
        </header>
        <section className="location-user-show-section">
        <header className="location-user-show-header">
          <h1><i class="em em-house_with_garden"></i>Local Hosts</h1>
        </header>
          <article className="location-user-show-article">
          {locationUser}
          </article>
        </section>
      </div>

    )
  }
}

export default LocationShow;
