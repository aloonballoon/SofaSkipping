import React from 'react';


class UserDashSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.dropdownStatusClick = this.dropdownStatusClick.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  dropdownStatusClick() {
    return document.getElementById("dash-status-dropdown-id").classList.toggle("show-dash-status-dropdown");
  }

  changeStatus(e) {
    e.preventDefault();
    this.setState({user_status: e.target.value}, () => {
      this.props.updateStatus(this.state);

    });
  }



  render() {

    const ACCEPTING_GUESTS = "Accepting guests";
    const MAYBE_ACCEPTING_GUESTS = "Maybe accepting guests";
    const NOT_ACCEPTING_GUESTS = "Not accepting guests";

    let changeStatusButton = <button onClick={() => this.dropdownStatusClick()} className="dash-status-button">{this.state.user_status}</button>;


    return (
      <aside className="dash-sidebar-aside">
        <header className="dash-sidebar-header">
          <p>{this.props.user.first_name} {this.props.user.last_name}</p>
          <p>New York, New York</p>
        </header>
        <footer className="dash-sidebar-footer">
          {changeStatusButton}
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

export default UserDashSidebar;



// <input type="file" onChange={this.handleFile.bind(this)}></input>
