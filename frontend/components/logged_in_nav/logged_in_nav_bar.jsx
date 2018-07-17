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
          <button onClick={() => this.dropdownSearchClick()} className="dash-nav-dropdown-button">Explore </button>

          <div id='nav-dropdown' className='dash-nav-dropdown-menu'>
          <ul>
            <li>
              <button>Explore</button>
            </li>
            <li>
              <button>Find Hosts</button>
            </li>
            <li>
              <button>Find Members</button>
            </li>
            <li>
              <button>Find Travelers</button>
            </li>
          </ul>
          </div>
          <input className="dash-nav-search-input" type="text" placeholder="Where are you going?"></input>
        </form>

        <div className="dash-circular-user-button-div">
          <img onClick={() => this.dropdownUserClick()} className="dash-nav-profile-photo" src={userPicture}/>
          <div id='nav-user-dropdown' className='dash-nav-user-menu'>
            <ul className="dash-nav-user-ul">
              <li>
                <button>My Dashboard </button>
              </li>
              <li>
                <button>My Profile</button>
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
