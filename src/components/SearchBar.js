import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (e) => {
    e.preventDefault();
    let textInput = document.getElementById('searchBar').value;
    this.props.fetchITunesData(textInput);
  };

  render() {
    return (
      <div className='search-iTune-bar'>
        <div className='search-itune-input-wrapper'>
          <form onSubmit={this.handleChange}>
            <input
              type='text'
              id='searchBar'
              name='searchBar'
              placeholder='Search song from iTune store'
              autoFocus
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
