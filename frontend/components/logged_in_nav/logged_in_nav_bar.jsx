import React from 'react';

class LoggedInNav extends React.Component {

render() {

    return (
      <header>
        <button onClick={() => this.props.logOut()}>Log Out</button>
      </header>
    );
  }
}

export default LoggedInNav;
