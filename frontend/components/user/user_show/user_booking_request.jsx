import React from 'react';

class UserBookingRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      errors: "",
      success: "",
      hidden: true
    }

    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
  }

  handleStartDate(e) {
    this.setState({startDate: e.target.value})
  }

  handleEndDate(e) {
    this.setState({endDate: e.target.value})
  }

  cancelInputs() {
    this.setState({startDate: "", endDate: ""})
    this.setState({errors: ""})
    this.setState({success: ""})
  }

  handleSubmit(e) {
    const otherProps = this.props.props.otherProps;
    e.preventDefault();
    if (new Date(this.state.startDate) < new Date(this.state.endDate)) {
      this.setState({errors: ""})
      otherProps.createTrip({
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        userId: otherProps.user.id
      }).then(() => this.setState({success: "SUCCESS! Awaiting confirmation by host."}))
    } else {
      this.setState({errors: "Invalid Dates!!"})
    }
  }

  componentDidMount() {
    this.setState({hidden: this.props.props.hiddenBookings})
  }

  componentDidUpdate(prevProps) {
    let hidden = this.props.props.hiddenBookings;
    if (this.props.props.hiddenBookings !== prevProps.props.hiddenBookings) {
      this.setState({hidden: hidden})
    }
  }

  render() {
    let successMessage;
    let errorMessage;
    let errors;
    if (this.state.errors !== "") {
      errors = this.state.errors;
      errorMessage = <div className="user-show-errors-message-div"><div>{errors}</div></div>
    }

    if (this.state.success !== "") {
      successMessage = <div className="user-show-success-message-div"><div>{this.state.success}</div></div>
    }

    let hiddenFormState = "user-show-hidden";
    let hiddenFormStateAddOn = "hidden";

    if (this.state.hidden) {
      hiddenFormStateAddOn = "hidden";
    } else {
      hiddenFormStateAddOn = "show";
    }

    return(
        <form className={hiddenFormState + ` ${hiddenFormStateAddOn}`} onSubmit={(e) => this.handleSubmit(e)}>
            {errorMessage}
            {successMessage}
            <h1 className="user-show-hang-out-banner">Send a Request to Hang Out</h1>
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
              <div className="user-show-cancel-div" onClick={() => this.cancelInputs()}><div className="text-div" onClick={() => this.cancelInputs()}>Clear</div></div>
            </div>
        </form>
    )
  }
}

export default UserBookingRequest;
