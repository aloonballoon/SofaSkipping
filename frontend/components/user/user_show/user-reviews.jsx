import React from 'react';

class UserReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      recommended: "true"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return(
      <div>
        <form className="user-show-review-form" onSubmit={(e) => this.handleSubmit(e)}>
            <header className="user-show-write-review-h1">Write a Review for {this.props.user.first_name}</header>
            <section className="user-show-write-review-section">
              <div className="user-show-radio-input-div">
                <label>
                  <input onChange={(event) => this.handleChange(event)} className="user-show-review-radio-input" type="radio" name="recommended" checked={this.state.recommended === "true"} value="true"/>
                  Yes, I would recommend {this.props.user.first_name}
                </label>
                <label>
                  <input onChange={(event) => this.handleChange(event)} className="user-show-review-radio-input" type="radio" checked={this.state.recommended === "false"} name="recommended" value="false"/>
                  No, I would not recommend {this.props.user.first_name}
                </label>
              </div>

              <div>
                <h2>Review Title</h2>
                <input required type="text" value={this.state.title} name="title" onChange={(event) => this.handleChange(event)}/>
              </div>
              <div>
                <h2>Review Body</h2>
                <textarea required rows="7" cols="50" name="body" onChange={(event) => this.handleChange(event)} placeholder={"Write something about " + this.props.user.first_name}></textarea>
              </div>
              <button className="user-show-send-request-review-button submit-review">Submit Review</button>
            </section>
        </form>
      </div>
    )
  }

}

export default UserReviews;
