import React from 'react';
import { withRouter } from 'react-router';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      errors: "",
      success: ""
    }
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
  }

  handleStartDate(e) {
    this.setState({startDate: e.target.value}, () => console.log(this.state.startDate))
  }

  handleEndDate(e) {
    this.setState({endDate: e.target.value}, () => console.log(this.state.endDate))
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchUser(this.props.match.params.userId)
  }

  cancelInputs() {
    this.setState({startDate: "", endDate: ""})
    this.setState({errors: ""})
    this.setState({success: ""})
  }

  handleSubmit(e) {
    e.preventDefault();
    if (new Date(this.state.startDate) < new Date(this.state.endDate)) {
      this.setState({errors: ""})
      this.props.createTrip({
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        userId: this.props.user.id
      }).then(() => this.setState({success: "SUCCESS! Awaiting confirmation by host."}))
    } else {
      this.setState({errors: "Invalid Dates!!"})
    }
  }

  render() {
    let user = this.props.user || {};
    let successMessage;
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

    let hiddenFormState = "user-show-hidden";

    let errorMessage;
    let errors;
    if (this.state.errors !== "") {
      errors = this.state.errors;
      errorMessage = <div className="user-show-errors-message-div"><div>{errors}</div></div>
    }

    if (this.state.success !== "") {
      successMessage = <div className="user-show-success-message-div"><div>{this.state.success}</div></div>
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
          <form className={hiddenFormState} onSubmit={(e) => this.handleSubmit(e)}>
              {errorMessage}
              {successMessage}
              <div className="user-show-section-date-div">
                <div className="user-show-arrival-date-div">
                  <p>Arrival Date</p>
                  <input required type="date" onChange={(e) => this.handleStartDate(e)} value={this.state.startDate}/>
                </div>
                <div className="user-show-departure-date-div">
                  <p>Departure Date</p>
                  <input required type="date" onChange={(e) => this.handleEndDate(e)} value={this.state.endDate}/>
                </div>
              </div>
              <div className="user-show-request-buttons-div">
                <button className="user-show-send-message-button-final">Send</button>
                <div className="user-show-cancel-div" onClick={() => this.cancelInputs()}><div className="text-div" onClick={() => this.cancelInputs()}>Cancel</div></div>
              </div>


          </form>
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
