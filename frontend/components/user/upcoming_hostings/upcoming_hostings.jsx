import React from 'react';
import UpcomingHostingsItem from './upcoming_hostings_item';

class UpcomingHostings extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  componentDidMount() {
    this.props.fetchGuests(this.props.currentUser.id)
  }

  render() {
    return(
      <section>
        <ul>

        </ul>
      </section>
    );
  }
}

export default UpcomingHostings;
