import React from 'react';

class LoggedInNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.dropdownSearchClick = this.dropdownSearchClick.bind(this);
    this.dropdownUserClick = this.dropdownUserClick.bind(this);
  }

  dropdownSearchClick() {
    return document.getElementById("nav-dropdown").classList.toggle("show-search");
  }

  dropdownUserClick() {
    return document.getElementById("nav-user-dropdown").classList.toggle("show-user");
  }


render() {

  let userPicture;
  if (this.props.user.photoUrl) {
    userPicture = this.props.user.photoUrl
  } else {
    userPicture = window.profile_pic_placeholder
  }

    return (
      <header className="dash-top-nav">
        <article className="logo">
          SofaSkipping
        </article>
        <form className="dash-nav-input-dropdown-form">
          <button onClick={() => this.dropdownSearchClick()} className="dash-nav-dropdown-button">Explore</button>
          <div id='nav-dropdown' className='dash-nav-dropdown-menu'>
            <a href='myspace.com'>MySpace</a>
          </div>
          <input className="dash-nav-search-input" type="text" placeholder="Where are you going?"></input>
        </form>

        <div className="dash-circular-user-button-div">
          <button  onClick={() => this.dropdownUserClick()} className="dash-nav-user-dropdown-button"><img className="dash-nav-profile-photo" src={userPicture}/></button>
          <div id='nav-user-dropdown' className='dash-nav-user-menu'>
            <ul>
              <li>
                <a href='myspace.com'>MySpace</a>
              </li>
              <li>
                <button onClick={() => this.props.logOut()}>Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default LoggedInNav;
