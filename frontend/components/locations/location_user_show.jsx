import React from 'react';
import { withRouter } from 'react-router-dom';

class LocationUserShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/members/${this.props.user.id}`)
  }

  render() {

    const user = this.props.user || {};

    return(
      <div className="location-user-show-div">
        <img className="location-user-show-image" src={window.profile_pic_placeholder} onClick={() => this.handleClick()} />
        <span className="location-user-show-name">{user.first_name} {user.last_name} </span>
      </div>
    )
  }
}

export default withRouter(LocationUserShow);
