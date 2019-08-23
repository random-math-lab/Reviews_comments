import React from 'react';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      reviews : [],
    }

    this.fetchReviews = this.fetchReviews.bind(this);
  }

  fetchReviews() {
    const that = this;
    fetch('/api/reviews')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      that.setState({reviews : data})
    });
  }

  componentDidMount() {
    this.fetchReviews();
  }

  render() {
    return(
      <div>
        Reviews!
      </div>
    )
  }
}

export default App