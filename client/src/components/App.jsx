import React from 'react';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      listingInfo : [],
    }

    this.fetchInfo = this.fetchInfo.bind(this);
  }

  fetchInfo() {
    const that = this;
    fetch('/api/reviews')
    .then(function(response) {
      return response.json();s
    })
    .then(function(data) {
      console.log(data);
      that.setState({listingInfo : data})
    });
  }

  componentDidMount() {
    this.fetchInfo();
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