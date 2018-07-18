import React from 'react';
import { withRouter } from 'react-router';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user || {}
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
  }

  render() {
    let user = this.props.user || {};

    let userPhoto;
    if (user.photoUrl) {
      userPhoto = user.photoUrl;
    } else {
      userPhoto = window.profile_pic_placeholder;
    }

    let classStatus;
    let userStatus = user.user_status;
    if (userStatus === "Accepting guests") {
      classStatus = "user-show-status-accepting"
    } else if (userStatus === "Not accepting guests") {
      classStatus = "user-show-status-not-accepting"
    } else {
      classStatus = "user-show-status-maybe"
    }

    let location = user.location || {};
    let city = location.city || null;
    let country = location.country || null;

    return(
      <div className="user-show-background-div">
        <aside className="user-show-aside-name-image">
          <img className="user-show-img" src={userPhoto} />
          <div className="user-show-div-name-location">
            <h1 className="user-show-h1">
              {user.first_name} {user.last_name}
            </h1>
          </div>
          <footer className="user-show-footer">
            <h2 className="user-show-h2">
              {city}, {country}
            </h2>
          </footer>
        </aside>
        <section className="user-show-info-section">
          <article className="user-show-article-status">
            <div className="user-show-user-status-div" className={classStatus}>
              {user.user_status}
            </div>
            <div className="user-show-button-div">
              <button className="user-show-send-message-button" >Send Request</button>
              <button className="user-show-send-message-button" >Write a Review</button>
            </div>
          </article>
          <section className="user-show-section-bio">
            <header className="user-show-bio-header">
              ABOUT ME
            </header>
            <article className="user-show-bio-body">
            {user.bio}
            </article>
          </section>
        </section>

      </div>
    )
  }
}

export default withRouter(UserShow);
