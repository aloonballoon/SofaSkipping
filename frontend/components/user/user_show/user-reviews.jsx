import React from 'react';

class UserReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      recommended: "true",
      error: "",
      success: "",
      hidden: true
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.props.otherProps.fetchReviews(this.props.props.otherProps.match.params.userId)
    this.setState({hidden: this.props.props.hiddenReviews});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.props.hiddenReviews !== this.props.props.hiddenReviews) {
      this.setState({hidden: this.props.props.hiddenReviews});
    }
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0'+ dd
    }

    if (mm < 10) {
        mm = '0'+ mm
    }

    today = mm + '-' + dd + '-' + yyyy;

    let state = this.state;
    let params = {title: state.title, body: state.body, recommended: state.recommended, revieweeId: this.props.props.otherProps.match.params.userId, date: today }
    this.props.props.otherProps.createReviews(params)
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

    let hiddenFormState = "user-show-review-form";
    let hiddenFormStateAddOn = "hidden";

    if (this.state.hidden) {
      hiddenFormStateAddOn = "hidden";
    } else {
      hiddenFormStateAddOn = "show";
    }

    let user = this.props.props.otherProps.user || {};

    return(
        <form className={hiddenFormState + ` ${hiddenFormStateAddOn}`} onSubmit={(e) => this.handleSubmit(e)}>
            <header className="user-show-write-review-h1">Write a Review for {user.first_name}</header>
            <section className="user-show-write-review-section">
              <div className="user-show-radio-input-div">
                <label>
                  <input onChange={(event) => this.handleChange(event)} className="user-show-review-radio-input" type="radio" name="recommended" checked={this.state.recommended === "true"} value="true"/>
                  Yes, I would recommend {user.first_name}
                </label>
                <label>
                  <input onChange={(event) => this.handleChange(event)} className="user-show-review-radio-input" type="radio" checked={this.state.recommended === "false"} name="recommended" value="false"/>
                  No, I would not recommend {user.first_name}
                </label>
              </div>

              <div>
                <h2>Review Title</h2>
                <input required type="text" value={this.state.title} name="title" onChange={(event) => this.handleChange(event)}/>
              </div>
              <div>
                <h2>Review Body</h2>
                <textarea required rows="7" cols="50" name="body" onChange={(event) => this.handleChange(event)} placeholder={"Write something about " + user.first_name}></textarea>
              </div>
              <button className="user-show-send-request-review-button submit-review">Submit Review</button>
            </section>
        </form>
    )
  }

}

export default UserReviews;
