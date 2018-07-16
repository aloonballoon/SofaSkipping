import React from 'react';
import UpcomingHostingsItem from './upcoming_hostings_item';

class UpcomingHostings extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  componentDidMount() {

  }

  render() {

  // let hostingsArr = [];
  // const hostings = this.props.hostings.forEach((hosting, idx) => {
  //   this.props.guests.forEach(guest => {
  //     if (guest.id === hosting.traveler_id) {
  //        hostingsArr.push(<UpcomingHostingsItem hosting={hosting} guest={guest} key={idx} />})
  //     })
  //   })



    return(
      <section>
        <ul>

        </ul>
      </section>
    );
  }
}

export default UpcomingHostings;
