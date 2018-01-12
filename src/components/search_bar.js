import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search-bar">
        <input
        onChange={this.props.change} />
        <h1>{this.props.term}</h1>
      </div>
    );
  }
}

export default SearchBar;
