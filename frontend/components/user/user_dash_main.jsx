import React from 'react';
import { withRouter } from 'react-router';

class UserDashMain extends React.Component {
  constructor(props) {
    super(props);
    this.handleRecommendationClick = this.handleRecommendationClick.bind(this);
  }

  handleRecommendationClick(location) {
    this.props.history.push(`/location/${location}`)
  }

  render() {
    return (
      <section className="dash-section">

        <header className="dash-main-header"><i className="em em-couch_and_lamp"></i>DIVE IN THE DEEPEST LAKES, CLIMB THE HIGHEST MOUNTAINS, SEE WHERE LORD OF THE RINGS WAS FILMED</header>

        <section className="dash-main-pictures-section">
            <div className="dash-main-picture1" className="dash-section-divs">
              <img id="mountain-image" src={window.everest} />
              <div className="image-overlay" onClick={() => this.handleRecommendationClick("Khumjung")}>
                <div className="image-overlay-text">Visit Mount Everest!</div>
              </div>
            </div>
            <div className="dash-main-picture2" className="dash-section-divs">
              <img id="lake-image" src={window.borabora} />
              <div className="image-overlay" onClick={() => this.handleRecommendationClick("French Polynesia")}>
                <div className="image-overlay-text">Visit Bora Bora!</div>
              </div>
            </div>
            <div className="dash-main-picture3" className="dash-section-divs">
              <img id="esp-image" src={window.esp} />
              <div className="image-overlay" onClick={() => this.handleRecommendationClick("New York")}>
                <div className="image-overlay-text">Visit New York!</div>
              </div>
            </div>
        </section>
      </section>
    );
  };
}

export default withRouter(UserDashMain);
