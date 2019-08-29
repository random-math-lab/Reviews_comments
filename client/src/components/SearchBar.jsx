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
    this.props.search(this.state.value);
  }


  render() {
    return (
      <form id="search" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.value}
          placeholder="Search reviews"
        />
      </form>
    );
  }
}

export default SearchBar;