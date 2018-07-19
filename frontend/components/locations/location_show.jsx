import React from 'react';

class LocationShow extends React.Component {
  render() {

    const locationName = this.props.location


    return(
      <div className="location-show-entire-container-div">

        <header className="location-show-background-image-header">
          <h1 className="location-show-title-h1">
            {locationName}
          </h1>
          <img className="location-show-background-image" src={window.beautiful_beach}/>
        </header>
      </div>

    )
  }
}

export default LocationShow;
