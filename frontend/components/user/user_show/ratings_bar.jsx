import React from 'react';
import StarRatings from 'react-star-ratings';

class RatingsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      numReviews: 0
    };

    this.changeRating = this.changeRating.bind(this);
  }

  componentDidMount() {
    let ratingSum = 0;
    let numReviews = 0;
    this.props.reviews.forEach(review => {
      ratingSum += review.rating;

    })

    this.setState({rating: ratingSum});
  }

  componentDidUpdate(prevProps) {
    let reviewsArr = this.props.reviews;
    if (reviewsArr !== prevProps.reviews) {
      let ratingSum = 0;
      let numReviews = 0;

      reviewsArr.forEach(review => {
        ratingSum += review.rating;
      })

      this.setState({rating: ratingSum, numReviews: reviewsArr.length});
    }
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
  }

  render() {
    let pluralReview = "review";
    if (this.state.numReviews > 1) {
      pluralReview = "reviews";
    }

    return(
      <div>
        <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
        />
        <span className="heading">User Rating</span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <p>{this.state.rating} star average based on {this.state.numReviews} {pluralReview}.</p>

        <div className="row">
          <div className="side">
            <div>5 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-5"></div>
            </div>
          </div>
          <div className="side right">
            <div>150</div>
          </div>
          <div className="side">
            <div>4 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-4"></div>
            </div>
          </div>
          <div className="side right">
            <div>63</div>
          </div>
          <div className="side">
            <div>3 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-3"></div>
            </div>
          </div>
          <div className="side right">
            <div>15</div>
          </div>
          <div className="side">
            <div>2 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-2"></div>
            </div>
          </div>
          <div className="side right">
            <div>6</div>
          </div>
          <div className="side">
            <div>1 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div className="bar-1"></div>
            </div>
          </div>
          <div className="side right">
            <div>20</div>
          </div>
        </div>

      </div>

    );
  }
}


export default RatingsBar;
