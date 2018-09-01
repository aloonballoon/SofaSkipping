import React from 'react';

class UserReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    debugger
    this.setState({field: event.target.value}, console.log(this.state.title))
  }

  render() {
    return(
      <div>
        <form className="user-show-review-form" onSubmit={(e) => this.handleSubmit(e)}>
            <header className="user-show-write-review-h1">Write a Review for {this.props.user.first_name}</header>
            <section className="user-show-write-review-section">
            <div className="user-show-radio-input-div">
              <label htmlFor="review-would-stay">
                <input className="user-show-review-radio-input" type="radio" id="review-would-stay" name="review-radio-yes-no"></input>
                Yes, I would recommend {this.props.user.first_name}
              </label>
              <label htmlFor="review-would-not-stay">
                <input className="user-show-review-radio-input" type="radio" id="review-would-not-stay" name="review-radio-yes-no"></input>
                No, I would not recommend {this.props.user.first_name}
              </label>
            </div>

              <div>
                <h2>Review Title</h2>
                <input type="text" value={this.state.title} onChange={() => this.handleChange("title")}></input>
              </div>
              <div>
                <h2>Review Body</h2>
                <textarea rows="4" cols="50"></textarea>
              </div>
              <button className="user-show-send-request-review-button submit-review">Submit Review</button>
            </section>
        </form>
      </div>
    )
  }

}

export default UserReviews;
