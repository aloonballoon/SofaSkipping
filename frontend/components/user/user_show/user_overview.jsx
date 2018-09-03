import React from 'react';

const UserOverview = (props) => {
    let user = props.props.user || {};
    
    return(
      <section className="user-show-section-bio">
        <header className="user-show-bio-header">
          OVERVIEW
        </header>
        <article className="user-show-bio-body">
        <ul className="user-show-overview-ul">
          <li>
           <i className="em em-left_speech_bubble"></i>  No languages listed
          </li>
          <li>
           <i className="em em-older_adult"></i>  {user.age}
          </li>
          <li>
          <i className="em em-briefcase"></i>  No occupation listed
          </li>
        </ul>
        </article>
      </section>
    )

}

export default UserOverview;
