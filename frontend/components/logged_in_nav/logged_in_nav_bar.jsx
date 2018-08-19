import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import { withRouter } from 'react-router-dom';


class LoggedInNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      text: "",
      searchFilter: "Find Members",
      lat: "",
      lng: "",
      city: "",
      country: "",
      photos: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.changeSearchFilter = this.changeSearchFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleDashClick= this.handleDashClick.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  changeSearchFilter(filter) {
    this.setState({searchFilter: filter})
    this.setState({text: ""});
  }

  handleProfile() {
    this.props.history.push(`/members/${this.props.user.id}`);
  }

  handleDashClick() {
    this.props.history.push('/dashboard');
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
        }, () => {
          this.props.createLocation(this.state).then(() => {
          this.props.history.push(`/location/${this.state.text}`)
          })
        });
      break;
      default:
        null;

    }
  }

  handleGoogle(place) {
    let country;
    if (Number.isInteger(Number(place.place.address_components.slice(-1)[0].long_name))) {
      country = place.place.address_components.slice(-2)[0].long_name
    } else {
      country = place.place.address_components.slice(-1)[0].long_name
    }
    this.setState({text: place.place.name,
                   city: place.place.address_components[0].long_name,
                   country: country,
                   lat: place.place.geometry.location.lat(),
                   lng: place.place.geometry.location.lng()
                 })
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
        <article className="logo" onClick={() => this.handleDashClick()}>
          SofaSkipping
        </article>
        <div className="logged-in-nav-errors-div">
          {errors}
        </div>

        <article className="dash-nav-input-dropdown-form" >

        <div className="dropdown">
          <button className="dropbtn" className="dash-nav-dropdown-menu">{this.state.searchFilter}</button>
          <div className="dropdown-content">
            <ul className="directions-ul">
            <li onClick={() => this.changeSearchFilter("Explore")}>
              <div>Explore</div>
            </li>
            <li onClick={() => this.changeSearchFilter("Find Members")}>
              <div>Find Members</div>
            </li>
            </ul>
          </div>
        </div>
          {input}
        </article>

        <div className="dropdown-profile">
          <img className="dash-nav-profile-photo" src={userPicture}/>
          <div className="dropdown-content-profile">
            <ul className="directions-ul">
              <li onClick={() => this.handleDashClick()}>
                <div>My Dashboard </div>
              </li>
              <li onClick={() => this.handleProfile()}>
                <div>My Profile</div>
              </li>
              <li onClick={() => this.props.logOut()}>
              <div>Log Out</div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default LoggedInNav;
