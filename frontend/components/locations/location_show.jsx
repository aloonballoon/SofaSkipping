import Autocomplete from 'react-google-autocomplete';
import React from 'react';
import LocationUserShow from './location_user_show';

class LocationShow extends React.Component {

  componentDidMount() {
    this.props.fetchLocation(this.props.locationName);
  }


  render() {
    const display = {visibility: 'hidden', height: '0px'};
    const picArr = [window.space_cat, window.volcano, window.palms, window.beautiful_beach2];
    const randomPic = picArr[Math.floor(Math.random()*picArr.length)];
    const location = this.props.location || {}
    const locationCityName = location.city
    const locationCountryName = location.country
    const locationHost = this.props.hosts.map(host => {
      return <LocationUserShow user={host} key={host.id} />
    })

    const locationGuest = this.props.guests.map(guest => {
      return <LocationUserShow user={guest} key={guest.id} />
    })

    const input = <form style={display} onSubmit={(e) => this.handleSubmit(e)}>
              <Autocomplete
                className="dash-nav-search-input" style={{width: '80%'}, {height: '80%'}}
                onChange={(e) => this.handleChange(e)}
                onPlaceSelected={(place) => {
                this.handleGoogle({place});
                }}
                types={['(regions)']}
              />
            </form>


    return(
      <div className="location-show-entire-container-div">
      {input}
        <header className="location-show-background-image-header">
          <h1 className="location-show-title-h1">
            {locationCityName}, {locationCountryName}
          </h1>
          <img className="location-show-background-image" src={randomPic}/>
        </header>
        <section className="location-user-show-host-and-guest-wrapper">
        <section className="location-user-show-section">
        <header className="location-user-show-header">
          <h1><i className="em em-house_with_garden"></i>Local Hosts</h1>
        </header>
          <article className="location-user-show-article">
          {locationHost}
          </article>
        </section>

        <section className="location-user-show-section">
        <header className="location-user-show-header">
          <h1><i className="em em-small_airplane"></i>Local Travelers</h1>
        </header>
          <article className="location-user-show-article">
          {locationGuest}
          </article>
        </section>
        </section>

      </div>

    )
  }
}

export default LocationShow;
