import React, { Component } from 'react';
import moment from 'moment';

class ITuneList extends Component {
  state = {
    playing: false,
    playingSongId: '',
  };

  togglePlay = (id) => {
    var prevSongAudio = document.getElementById(this.state.playingSongId);
    var currentSongAudio = document.getElementById(id);
    if (this.state.playing) {
      if (this.state.playingSongId === id) {
        prevSongAudio.pause();
        this.setState(() => ({
          playing: false,
          playingSongId: '',
        }));
      } else {
        prevSongAudio.pause();
        currentSongAudio.play();
        this.setState(() => ({
          playing: true,
          playingSongId: id,
        }));
      }
    } else {
      currentSongAudio.play();
      this.setState(() => ({
        playing: true,
        playingSongId: id,
      }));
    }
  };

  render() {
    const { iTunesData, resultCount } = this.props;

    return (
      <div className='search-itunes-results'>
        <ol className='itunes-grid'>
          {resultCount &&
            iTunesData.map((iTune) => {
              return (
                <li key={iTune.trackId}>
                  <div className='iTune'>
                    <div className='iTune-top'>
                      <div
                        className='iTune-cover'
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${iTune.artworkUrl100})`,
                        }}
                      ></div>
                      <div
                        className='itune-play'
                        onClick={() => this.togglePlay(iTune.trackId)}
                      >
                        <audio
                          id={iTune.trackId}
                          src={iTune.previewUrl}
                          preload='auto'
                        ></audio>
                      </div>
                    </div>
                    <div className='song-title'>{iTune.trackName}</div>
                    <div className='song-artist'>{iTune.artistName}</div>
                    <div className='song-artist'>
                      Release: {moment(iTune.releaseDate).format('DD MMM YYYY')}
                    </div>
                    <div className='song-artist'>
                      Collection: {iTune.collectionName}
                    </div>
                  </div>
                </li>
              );
            })}
        </ol>
      </div>
    );
  }
}

export default ITuneList;
