import React from 'react';
import { withRouter } from 'react-router';
import UserReviews from './user-reviews';
import UserBookingRequest from './user-booking-request';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }

    this.handleLocationClick = this.handleLocationClick.bind(this);
    this.toggleDateSelector = this.toggleDateSelector.bind(this);

  }

  handleLocationClick() {
    this.props.history.push(`/location/${this.props.user.location.city}`)
  }

  toggleDateSelector() {
    let css = this.state.hidden ? false : true;
    this.setState({hidden: css})
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchUser(this.props.match.params.userId)
  }

  // updateInputField (arg) {
  //   this.setState({ connectionToInputVal: arg })
  // }

  // <input type="date" value={this.state.connectionToInputVal}
  // <CalendarComponent update={this.updateInputField.bind(this)}

  render() {
    let user = this.props.user || {};
    let currentUser = this.props.currentUser || {};
    let userPhoto
    if (user.photoUrl) {
      userPhoto = user.photoUrl;
    } else if (
      user.first_name === "Alan" && user.last_name === "Uraz"
    ) {
      userPhoto = window.alan;
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

    let sendRequestButton;
    let sendReviewButton;

    if (user.id !== currentUser.id) {
      sendRequestButton = <button className="user-show-send-request-review-button message" onClick={() => this.toggleDateSelector()}>Send Request</button>
      sendReviewButton = <button className="user-show-send-request-review-button review" >Write a Review</button>
    }

    let props = {
      hidden: this.state.hidden,
      otherProps: this.props
    }

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
            <h2 className="user-show-h2" onClick={() => this.handleLocationClick()}>
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
              {sendRequestButton}
              {sendReviewButton}
            </div>
          </article>

          <UserBookingRequest props={props}/>
          <UserReviews user={user}/>

          <section className="user-show-section-bio">
            <header className="user-show-bio-header">
              OVERVIEW
            </header>
            <article className="user-show-bio-body">
            <ul className="user-show-overview-ul">
              <li>
               <i className="em em-left_speech_bubble"></i>  No languages listed
              </li>
              <li>
               <i className="em em-older_adult"></i>  {user.age}
              </li>
              <li>
              <i className="em em-briefcase"></i>  No occupation listed
              </li>
            </ul>
            </article>
          </section>


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
