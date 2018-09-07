import React from 'react';

class UserOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {reviews: ""};
    this.showReferences = this.showReferences.bind(this);
  }

  showReferences() {

  }

  componentDidMount() {
    let props = this.props.props;
    props.fetchReviews(this.props.props.match.params.userId);
    this.setState({reviews: props.reviews});
  }

  componentDidUpdate(prevProps) {
    let props = this.props.props;
    if (props.reviews !== prevProps.props.reviews) {
      this.setState({reviews: props.reviews})
    }
  }


  render() {

    let user = this.props.props.user || {};

    return(
      <section className="user-show-section-bio">
        <header className="user-show-bio-header">
          OVERVIEW
        </header>
        <article className="user-show-bio-body">
        <ul className="user-show-overview-ul">
          <li onClick={this.showReferences}>
            <i className="fas fa-quote-left"></i> Reviews: {this.state.reviews.length}
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
