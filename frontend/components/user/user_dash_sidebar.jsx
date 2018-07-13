import React from 'react';

const UserDashSidebar = (props) => {



  return (
    <aside className="dash-sidebar-aside">
      <header className="dash-sidebar-header">
        <p>{props.user.first_name} {props.user.last_name}</p>
        <p>New York, New York</p>
      </header>
      <footer className="dash-sidebar-footer">
        {props.user.user_status}
      </footer>
    </aside>
  );
};

export default UserDashSidebar;



// <input type="file" onChange={this.handleFile.bind(this)}></input>
