import React, { Component } from 'react'
import Slide from './slide'
import LeftArrow from './left_arrow'
import RightArrow from './right_arrow'

export default class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [],
      currentIndex: 0,
      translateValue: 0
    }
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.slideWidth = this.slideWidth.bind(this);
  }

  componentDidMount() {
    this.setState({images: this.props.photos})
  }

  componentDidUpdate(prevProps) {
    if (this.props.photos !== prevProps.photos) {
      this.setState({images: this.props.photos, currentIndex: 0, translateValue: 0})
    }
  }

  goToPrevSlide() {
      if(this.state.currentIndex === 0) {
        return this.setState({
          currentIndex: this.state.images.length - 1,
          translateValue: 0
        })
      }

      console.log(this.state.currentIndex)
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue - -(this.slideWidth())
      }));
    }

  goToNextSlide() {
      if(this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }

      console.log(this.state.currentIndex)
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }


  slideWidth() {
     return document.querySelector('.slide').clientWidth
  }


  render() {

    return (

      <div className="slider">
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide className="location-photo-slide" key={i} image={image} />
              ))
            }
        </div>

        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}
