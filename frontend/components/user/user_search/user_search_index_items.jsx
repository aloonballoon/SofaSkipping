import React from 'react';
import { withRouter } from 'react-router';


class UserSearchIndexItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.fetchUser(this.props.user.id).then(() => this.props.history.push(`/members/${this.props.user.id}`))
  }


 render() {

   let userPhoto;
   const user = this.props.user || {};
   const firstName = user.first_name;
   const lastName = user.last_name;
   const city = user.location.city;
   const country = user.location.country;
   const userStatus = user.user_status;
   if (user.photoUrl) {
     userPhoto = user.photoUrl;
   } else {
     userPhoto = window.profile_pic_placeholder;
   }

   let classStatus;
   if (userStatus === "Accepting guests") {
     classStatus = "user-search-status-accepting"
   } else if (userStatus === "Not accepting guests") {
     classStatus = "user-search-status-not-accepting"
   } else {
     classStatus = "user-search-status-maybe"
   }

    return(
      <li className="user-search-li">
        <section className="user-search-li-section">

          <img src={userPhoto} onClick={() => this.handleClick()} className="user-search-li-img" />

          <article className="user-search-name-location-article">
             <div className="user-search-article-div">
                <h1 className="user-search-article-h1" onClick={() => this.handleClick()}>
                  {firstName} {lastName}
                </h1>
                <h2 className={"user-search-article-h2"}>
                  {city}, {country}
                </h2>
              </div>
            </article>


            <aside className={classStatus}>
              {userStatus}
            </aside>

          </section>
      </li>
    )
  }
}

export default withRouter(UserSearchIndexItems);
