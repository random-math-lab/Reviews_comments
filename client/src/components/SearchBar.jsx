import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.handleSearch(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.inputSearchedTerm();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="form"
          onChange={this.handleChange}
          type="search"
          onClick={this.props.clearSearch}
          value={this.props.value}
          placeholder="🔍 Search reviews"
        />
      </form>
    );
  }
}

export default SearchBar;