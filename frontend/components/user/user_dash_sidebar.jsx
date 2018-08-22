import React from 'react';
import { withRouter } from 'react-router';


class UserDashSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.changeStatus = this.changeStatus.bind(this);
    this.handleLocationClick = this.handleLocationClick.bind(this);
  }

  changeStatus(e) {
    e.preventDefault();
    this.setState({user_status: e.target.value}, () => {
      this.props.updateStatus(this.state);
    });
  }

  handleLocationClick() {
    this.props.history.push(`/location/${this.props.user.location.city}`)
  }



  render() {

    const ACCEPTING_GUESTS = "Accepting guests";
    const MAYBE_ACCEPTING_GUESTS = "Maybe accepting guests";
    const NOT_ACCEPTING_GUESTS = "Not accepting guests";

    let changeStatusButton = <button className="dash-status-button" type="button" data-toggle="dropdown">{this.state.user_status}<span className="caret"></span></button>;


    return (
      <aside className="dash-sidebar-aside">
        <header className="dash-sidebar-header">
          <p>{this.props.user.first_name} {this.props.user.last_name}</p>
          <p className="dash-sidebar-location-p" onClick={() => this.handleLocationClick()} >{this.props.user.location.city}, {this.props.user.location.country}</p>
        </header>
        <footer className="dash-sidebar-footer">
          {changeStatusButton}
          <i className="em em-arrow_down_small"></i>
          <div id="dash-status-dropdown-id" className="hidden-dash-status-dropdown">
            <ul className="dash-status-ul">
              <li>
                <button value="Accepting guests" onClick={(e) => this.changeStatus(e)}>Accepting guests</button>
              </li>
              <li>
                <button value="Maybe accepting guests" onClick={(e) => this.changeStatus(e)}>Maybe accepting guests</button>
              </li>
              <li>
                <button value="Not accepting guests" onClick={(e) => this.changeStatus(e)}>Not accepting guests</button>
              </li>
            </ul>
          </div>
        </footer>
      </aside>
    );
  }
}

export default withRouter(UserDashSidebar);
