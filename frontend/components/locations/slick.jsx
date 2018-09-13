import React from 'react';
import Slider from 'react-slick';
import Loader from 'react-loader-spinner';

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: true
    }
  }

  componentDidMount() {
    const photos = this.props.photos;
    this.setState( {images: photos.photosUrl, loading: photos.loading} )
  }

  componentDidUpdate(prevProps) {
    let photos = this.props.photos;
    if (photos.photosUrl !== prevProps.photos.photosUrl) {
      this.setState({images: photos.photosUrl})
    }
    if (photos.loading !== prevProps.photos.loading) {
      let loadingState = this.state.loading ? false : true;
      this.setState({loading: loadingState})
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

    let spinner;

    if (this.state.loading) {
      spinner = <Loader
         type="Puff"
         color="#00BFFF"
         height="100"
         width="100"
      />;
    } else {
      spinner = null;
    }

    let divStyle={
          display: 'unset',
          backgroundImage: 'url(${window.travel_photo})'
        };

    let photos = this.state.images || [];
    let gotUrlPhotos = photos.map((photo, idx) => {
      return <div key={idx} style={divStyle} className="location-google-slider-photo-div">
              {spinner}
                <img className="location-google-slider-photo-img" src={photo.getUrl({maxWidth: 5000, maxHeight: 5000})}/>
             </div>

    })

    return (
      <Slider {...settings} className="location-google-slider">
          {gotUrlPhotos}
      </Slider>
    );
  }
}

export default SimpleSlider;
