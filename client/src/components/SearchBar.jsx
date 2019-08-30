import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.value);
    this.setState({ searched: true })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="search"
          onClick={this.props.clearSearch}
          value={this.state.value}
          placeholder="Search reviews"
        />
      </form>
    );
  }
}

export default SearchBar;