import React from 'react';

class RatingsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      numReviews: 0
    };
  }

  componentDidUpdate(prevProps) {
    let reviewsArr = this.props.reviews || [];

    if (reviewsArr !== prevProps.reviews) {
      debugger
      let ratingSum = 0;
      let numReviews = reviewsArr.length;

      reviewsArr.forEach(review => {
        debugger
        ratingSum += review.rating;
      })

      let ratingAverage = ratingSum / numReviews;
      debugger
      ratingAverage = Math.round(ratingAverage);

      this.setState({rating: ratingAverage, numReviews: reviewsArr.length});
    }
  }

  render() {
    let pluralReview = "review";
    if (this.state.numReviews > 1) {
      pluralReview = "reviews";
    }

    return(
      <div>

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
