import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    this.setState( {images: this.props.photos} )
  }

  componentDidUpdate(prevProps) {
    if (this.props.photos !== prevProps.photos) {
      this.setState({images: this.props.photos})
    }
  }

  render() {
    let settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000
    };
    let divStyle={
          display: 'unset'
        };

    let photos = this.state.images.map((photo, idx) => {
      return <div key={idx} style={divStyle} className="location-google-slider-photo-div">
             <img className="location-google-slider-photo-img" src={photo.getUrl({maxWidth: 5000, maxHeight: 5000})}/>
             </div>
    })

    return (
      <Slider {...settings} className="location-google-slider">
          {photos}
      </Slider>
    );
  }
}

export default SimpleSlider;
