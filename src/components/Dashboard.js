import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ITuneList from './ITuneList';
import axios from 'axios';

class Dashboard extends Component {
  state = {
    iTunesData: [],
    resultCount: 0,
  };

  fetchiTunesData = (input) => {
    axios
      .get(`https://itunes.apple.com/search?term=${input}`)
      .then((response) => {
        let { resultCount, results } = response.data;

        this.setState(() => ({
          iTunesData: results,
          resultCount,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { fetchiTunesData } = this;
    const { iTunesData, resultCount } = this.state;
    return (
      <div>
        <SearchBar fetchiTunesData={fetchiTunesData} />
        <ITuneList iTunesData={iTunesData} resultCount={resultCount} />
      </div>
    );
  }
}

export default Dashboard;
