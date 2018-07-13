import React from 'react';

const UserDashSidebar = (props) => {

  return (
    <aside>
      <header>
        <p>{props.user.first_name} {props.user.last_name}</p>
        <p>New York, New York</p>
      </header>
      <footer>

      </footer>
    </aside>
  );
};

export default UserDashSidebar;
