import React from 'react';

class LoggedInNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      text: "",
      searchFilter: "Find Members"
    }

    this.dropdownSearchClick = this.dropdownSearchClick.bind(this);
    this.dropdownUserClick = this.dropdownUserClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeSearchFilter = this.changeSearchFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  dropdownSearchClick() {
    return document.getElementById("nav-dropdown").classList.toggle("show-search");
  }

  dropdownUserClick() {
    return document.getElementById("nav-user-dropdown").classList.toggle("show-user");
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  changeSearchFilter(filter) {
    this.setState({searchFilter: filter})
    this.dropdownSearchClick();
  }



  handleSubmit(e) {
    e.preventDefault();
    switch (this.state.searchFilter) {
      case "Find Members":
        this.props.fetchUsers(this.state.text).then(() => {
          this.props.history.push(`/membersearch/${this.state.text}`);
        });
      default:
        null;

    }
  }

render() {

  let userPicture;
  if (this.props.user.photoUrl) {
    userPicture = this.props.user.photoUrl
  } else {
    userPicture = window.profile_pic_placeholder
  }

    let placeholder;
    if (this.state.searchFilter === "Find Members") {
      placeholder = "Search Users"
    } else {
      placeholder = "Where are you going?"
    }

    return (

      <header className="dash-top-nav">
        <article className="logo">
          SofaSkipping
        </article>
        <form className="dash-nav-input-dropdown-form" onSubmit={(e) => this.handleSubmit(e)}>
          <div onClick={() => this.dropdownSearchClick()} className="dash-nav-dropdown-button">{this.state.searchFilter} </div>

          <div id='nav-dropdown' className='dash-nav-dropdown-menu'>
          <ul>
            <li>
              <div onClick={() => this.changeSearchFilter("Explore")}>Explore</div>
            </li>
            <li>
              <div onClick={() => this.changeSearchFilter("Find Hosts")} >Find Hosts</div>
            </li>
            <li>
              <div onClick={() => this.changeSearchFilter("Find Members")}>Find Members</div>
            </li>
            <li>
              <div onClick={() => this.changeSearchFilter("Find Travelers")}>Find Travelers</div>
            </li>
          </ul>
          </div>
          <input onChange= {(e) => this.handleChange(e)} value={this.state.text} className="dash-nav-search-input" type="text" placeholder={placeholder}></input>
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
