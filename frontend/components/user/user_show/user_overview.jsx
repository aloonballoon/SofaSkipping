import React from 'react';

class UserOverview extends React.Component {
  constructor(props) {
    super(props);
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
            <i className="fas fa-quote-left"></i> References:
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
