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

        <form className="dash-nav-user-dropdown-form">
          <button onClick={() => this.dropdownUserClick()} className="dash-nav-user-dropdown">User Menu</button>
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
        </form>
      </header>
    );
  }
}

export default LoggedInNav;
