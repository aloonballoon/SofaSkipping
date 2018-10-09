import React from 'react';
import { withRouter } from 'react-router';
import UserReviews from './user_reviews';
import UserBookingRequest from './user_booking_request';
import UserOverview from './user_overview';
import UserAboutMe from './user_about_me';
import UpdateUserForm from './update_user_form';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenBookings: true,
      hiddenReviews: true
    }

    this.handleLocationClick = this.handleLocationClick.bind(this);
    this.toggleDateSelector = this.toggleDateSelector.bind(this);
    this.toggleReviewSelector = this.toggleReviewSelector.bind(this);

  }

  handleLocationClick() {
    this.props.history.push(`/location/${this.props.user.location.city}`)
  }

  toggleDateSelector() {
    let css = this.state.hiddenBookings ? false : true;
    this.setState({hiddenBookings: css})
  }

  toggleReviewSelector() {
    let css = this.state.hiddenReviews ? false : true;
    this.setState({hiddenReviews: css})
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
    let userPhoto;

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
      sendRequestButton = <button className="user-show-send-request-review-button message" onClick={() => this.toggleDateSelector()}>Request to Hang Out</button>
      sendReviewButton = <button className="user-show-send-request-review-button review" onClick={() => this.toggleReviewSelector()} >Write a Review</button>
    }

    let props = {
      hiddenBookings: this.state.hiddenBookings,
      hiddenReviews: this.state.hiddenReviews,
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
          <UserReviews props={props}/>
          <UserOverview props={props.otherProps}/>
          <UserAboutMe props={props.otherProps}/>
          <UpdateUserForm/>

        </section>
      </div>
    )
  }
}

export default withRouter(UserShow);
