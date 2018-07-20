import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { withRouter } from 'react-router-dom';


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
    this.handleClick = this.handleClick.bind(this);
    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleDashClick= this.handleDashClick.bind(this);
  }

  dropdownSearchClick() {
    return document.getElementById("nav-dropdown").classList.toggle("show-search");
  }

  dropdownUserClick() {
    return document.getElementById("nav-user-dropdown").classList.toggle("show-user");
  }

  handleChange(e) {
    this.setState({text: e.target.value});
    console.log(this.state.text)
  }

  changeSearchFilter(filter) {
    this.setState({searchFilter: filter})
    this.dropdownSearchClick();
    this.setState({text: ""});
  }

  handleClick() {
    this.props.history.push('/dashboard');
  }

  handleProfile() {
    this.props.history.push(`/members/${this.props.user.id}`);
    this.dropdownUserClick();
  }

  handleDashClick() {
    this.props.history.push('/dashboard');
    this.dropdownUserClick();
  }



  handleSubmit(e) {
    e.preventDefault();
    switch (this.state.searchFilter) {
      case "Find Members":
        this.props.fetchUsers(this.state.text).then(() => {
          this.props.history.push(`/membersearch/${this.state.text}`);
        });
      break;
      case "Explore":
        this.props.fetchLocation(this.state.text).then(() => {
          this.props.history.push(`/location/${this.state.text}`);
        });
      break;
      default:
        null;

    }
  }

  handleGoogle(place) {
    this.setState({text: place.place.address_components[0].long_name})
  }


render() {

  let userPicture;
  if (this.props.user.photoUrl) {
    userPicture = this.props.user.photoUrl
  } else {
    userPicture = window.profile_pic_placeholder
  }

  let errors;
  if (this.props.errors.length === 0) {
    errors = null;
  } else {
    errors = this.props.errors.message
  }

    let placeholder;
    if (this.state.searchFilter === "Find Members") {
      placeholder = "Search Users"
    } else {
      placeholder = "Where are you going?"
    }

    let input;
    if (this.state.searchFilter === "Find Members") {
        input = <form className="dash-nav-input-form" onSubmit={(e) => this.handleSubmit(e)}>
                  <input onChange= {(e) => this.handleChange(e)} value={this.state.text} className="dash-nav-search-input" type="text" placeholder={placeholder} onSubmit={(e) => this.handleSubmit(e)}>
                  </input>
                </form>
    } else if (this.state.searchFilter === "Explore") {
        input = <form onSubmit={(e) => this.handleSubmit(e)}>
                  <Autocomplete
                    className="dash-nav-search-input" style={{width: '80%'}, {height: '80%'}}
                    onChange={(e) => this.handleChange(e)}
                    onPlaceSelected={(place) => {
                    this.handleGoogle({place});
                    }}
                    types={['(regions)']}
                  />
                </form>}

    return (

      <header className="dash-top-nav">
        <article className="logo" onClick={() => this.handleClick()}>
          SofaSkipping
        </article>
        <div className="logged-in-nav-errors-div">
          {errors}
        </div>

        <article className="dash-nav-input-dropdown-form" >
          <div onClick={() => this.dropdownSearchClick()} className="dash-nav-dropdown-button">{this.state.searchFilter} </div>


          <div id='nav-dropdown' className='dash-nav-dropdown-menu'>
          <ul>
            <li>
              <div onClick={() => this.changeSearchFilter("Explore")}>Explore</div>
            </li>
            <li>
              <div onClick={() => this.changeSearchFilter("Find Members")}>Find Members</div>
            </li>
          </ul>
          </div>
          {input}
        </article>

        <div className="dash-circular-user-button-div">
          <img onClick={() => this.dropdownUserClick()} className="dash-nav-profile-photo" src={userPicture}/>
          <div id='nav-user-dropdown' className='dash-nav-user-menu'>
            <ul className="dash-nav-user-ul">
              <li>
                <button onClick={() => this.handleDashClick()}>My Dashboard </button>
              </li>
              <li>
                <button onClick={() => this.handleProfile()}>My Profile</button>
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
