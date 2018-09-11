import Autocomplete from 'react-google-autocomplete';
import GoogleMapReact from 'google-map-react'
import React from 'react';
import LocationUserShow from './location_user_show';
import Slick from './slick';
let searched = false;

class LocationShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photosUrl: [],
      locationCityName: "",
      locationCountryName: "",
      loading: true
    }

    this.initService = this.initService.bind(this);
    this.getPlacePhotos = this.getPlacePhotos.bind(this);
  }

  componentDidMount() {
    this.props.fetchLocation(this.props.locationName)
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.initService(this.props.location)
      if (!searched && this.props.city) {
        this.setState({locationCityName: this.props.city, locationCountryName: this.props.country, loading: true})
        this.initService(location);
        searched = true;
      }
    }
  }

  getPlacePhotos() {
    const setPhotos = (place) => {
      this.setState({photosUrl: place.photos, loading: false})
    }

    let placeService = new google.maps.places.PlacesService(document.createElement('div'));
    placeService.getDetails({ placeId: `${this.state.placeId}` }, setPhotos);
  }

  initService(location) {

    const displaySuggestions = (predictions, status) => {
      let placeId = predictions[0].place_id;
      this.setState({placeId: placeId}, this.getPlacePhotos);
    };

    let service = new google.maps.places.PlacesService(document.createElement('div'));
    service.findPlaceFromQuery({ query: `${location.city}, ${location.country}`, fields: ["photos", "place_id"] }, displaySuggestions);
  }

  render() {

    const location = this.props.location || {};
    const locationCityName = location.city;
    const locationCountryName = location.country;

    const locationHost = this.props.hosts.map(host => {
      return <LocationUserShow user={host} key={host.id} />
    });

    const locationGuest = this.props.guests.map(guest => {
      return <LocationUserShow user={guest} key={guest.id} />
    });

    let slick = <Slick photos={this.state} />;


    return(
      <div className="location-show-entire-container-div">
        <header className="location-show-background-image-header">
          <h1 className="location-show-title-h1">
            {locationCityName}, {locationCountryName}
          </h1>
        </header>
        <section className="location-google-photos-section">
          {slick}
        </section>
        <section className="location-user-show-host-and-guest-wrapper">
        <section className="location-user-show-section">
        <header className="location-user-show-header">
          <h1><i class="fas fa-home"></i>Local Hosts</h1>
        </header>
          <article className="location-user-show-article">
          {locationHost}
          </article>
        </section>

        <section className="location-user-show-section">
        <header className="location-user-show-header">
          <h1><i className="fas fa-plane-departure"></i>  Local Travelers</h1>
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
