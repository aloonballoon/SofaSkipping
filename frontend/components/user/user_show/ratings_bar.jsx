import React from 'react';

class RatingsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      numReviews: 0,
      reviewCounts: {5: 0, 4: 0, 3:0, 2:0, 1:0},
      bar1Width: 0,
      bar2Width: 0,
      bar3Width: 0,
      bar4Width: 0,
      bar5Width: 0
    };
  }

  componentDidUpdate(prevProps) {
    let reviewsArr = this.props.reviews || [];
    let reviewCounts = {5: 0, 4: 0, 3:0, 2:0, 1:0};

    if (reviewsArr !== prevProps.reviews) {
      let ratingSum = 0;
      let numReviews = reviewsArr.length;

      reviewsArr.forEach(review => {
        ratingSum += review.rating;
        reviewCounts[review.rating] += 1;
      })

      let ratingAverage = ratingSum / numReviews;
      ratingAverage = Math.round(ratingAverage);

      this.setState({rating: ratingAverage, numReviews: reviewsArr.length, reviewCounts: reviewCounts}, () => this.createBarWidths());
    }
  }

  createBarWidths() {
    let reviewCounts = this.state.reviewCounts;
    let total = this.state.numReviews;

    this.setState({bar1Width: reviewCounts[1] / total * 100,
                   bar2Width: reviewCounts[2] / total * 100,
                   bar3Width: reviewCounts[3] / total * 100,
                   bar4Width: reviewCounts[4] / total * 100,
                   bar5Width: reviewCounts[5] / total * 100,
                  })
  }

  render() {
    let pluralReview = "review";

    if (this.state.numReviews > 1) {
      pluralReview = "reviews";
    }

    let div5Style = {
      width: String(this.state.bar5Width) + '%'
    }

    let div4Style = {
      width: String(this.state.bar4Width) + '%'
    }

    let div3Style = {
      width: String(this.state.bar3Width) + '%'
    }

    let div2Style = {
      width: String(this.state.bar2Width) + '%'
    }

    let div1Style = {
      width: String(this.state.bar1Width) + '%'
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
              <div style={div5Style} className="bar-5"></div>
            </div>
          </div>
          <div className="side right">
            <div>{this.state.reviewCounts[5]}</div>
          </div>
          <div className="side">
            <div>4 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div style={div4Style} className="bar-4"></div>
            </div>
          </div>
          <div className="side right">
            <div>{this.state.reviewCounts[4]}</div>
          </div>
          <div className="side">
            <div>3 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div style={div3Style} className="bar-3"></div>
            </div>
          </div>
          <div className="side right">
            <div>{this.state.reviewCounts[3]}</div>
          </div>
          <div className="side">
            <div>2 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div style={div2Style} className="bar-2"></div>
            </div>
          </div>
          <div className="side right">
            <div>{this.state.reviewCounts[2]}</div>
          </div>
          <div className="side">
            <div>1 star</div>
          </div>
          <div className="middle">
            <div className="bar-container">
              <div style={div1Style} className="bar-1"></div>
            </div>
          </div>
          <div className="side right">
            <div>{this.state.reviewCounts[1]}</div>
          </div>
        </div>

      </div>

    );
  }
}


export default RatingsBar;
