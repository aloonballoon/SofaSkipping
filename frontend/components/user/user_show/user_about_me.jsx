import React from 'react';

class UserAboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    let user = this.props.props.user || {};

    return(
      <section className="user-show-section-bio">
        <header className="user-show-bio-header">
          ABOUT ME
        </header>
        <article className="user-show-bio-body">
          {user.bio}
        </article>
        <button>
          Update User Profile
        </button>
      </section>
    )
  }

}

export default UserAboutMe;
