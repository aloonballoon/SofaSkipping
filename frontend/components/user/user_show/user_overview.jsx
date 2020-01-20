import React from 'react';
import RatingsBar from './ratings_bar';

class UserOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {reviews: ""};
  }


  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.fetchReviews(this.props.match.params.userId);
    }
  }


  render() {

    const user = this.props.user || {};

    return(
      <section className="user-show-section-bio">
        <header className="user-show-bio-header">
          OVERVIEW
        </header>
        <article className="user-show-bio-body">
        <RatingsBar reviews={this.props.reviews}/>
        <ul className="user-show-overview-ul">
          <li>
            <i className="fas fa-quote-left"></i> Reviews: {this.props.reviews.length}
          </li>
          <li>
            <i className="fas fa-language"></i> Languages: No languages listed
          </li>
          <li>
            <i className="fas fa-hourglass-half"></i> Age: {user.age}
          </li>
          <li>
            <i className="fas fa-briefcase"></i> Occupation: No occupation listed
          </li>
        </ul>
        </article>
      </section>
    )
  }
}

export default UserOverview;
