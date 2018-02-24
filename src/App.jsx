import React, { Component } from 'react';
// import Filter from './Components/Filter';
// import Aggregate from './Components/Aggregate';
// import Playlist from './Components/Playlist';
import './App.css';

//* ******** DEFAULT STYLES *********//

const defaultStyle = {
  color: '#fff',
};

//* ******** FAKE DATA *********//
const fakeServerData = {
  user: {
    name: 'Nathane',
    playlists: [
      {
        name: 'Maleek Berry',
        songs: [
          { name: '4me ', duration: 634423 },
          { name: 'Been Callin', duration: 763423 },
          { name: 'Bend it', duration: 60423 },
        ],
      },
      {
        name: 'Davido',
        songs: [
          { name: 'Fia', duration: 6342 },
          { name: 'Fall', duration: 6323 },
          { name: 'If', duration: 3423 },
        ],
      },
      {
        name: 'Weekly discover',
        songs: [
          { name: 'Le song ', duration: 62423 },
          { name: 'the song', duration: 64423 },
          { name: 'Adorn', duration: 63426 },
        ],
      },
      {
        name: 'Me Eazi',
        songs: [
          { name: 'Pour me water ', duration: 3423 },
          { name: 'Leg Over', duration: 3423 },
          { name: 'Decline', duration: 34023 },
        ],
      },
    ],
  },
};

//* ******** PLAYLIST COUNTER COMPONENT *********//

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '25%', display: 'inline-block' }}>
        <h2>{this.props.playlists && this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

//* ******** HOUR COUNTER COMPONENT *********//

class HourCounter extends Component {
  render() {
    const allSongs = this.props.playlists.reduce(
      (songs, eachPlaylist) => songs.concat(eachPlaylist.songs),
      [],
    );
    const totalDuration = allSongs.reduce((sum, eachSong) => sum + eachSong.duration, 0);
    // const totalDuration = 78;

    return (
      <div style={{ ...defaultStyle, width: '25%', display: 'inline-block' }}>
        <h2>{Math.round(totalDuration / 60)} Hours</h2>
      </div>
    );
  }
}

//* ******** FILTER COMPONENT *********//

class Filter extends Component {
  render() {
    return (
      <div sytle={{ ...defaultStyle }}>
        <img src="" alt="" />
        <input type="text" name="" id="" />
      </div>
    );
  }
}

//* ******** PLAYLIST COMPONENT *********//

class Playlist extends Component {
  render() {
    const data = this.props.playlist;
    console.log(data);
    return (
      <div style={{ ...defaultStyle, width: '25%', display: 'inline-block' }}>
        <img src="" alt="" />
        <h3> Playlist Name</h3>
        <ul>
          <li>song 1</li>
          <li>song 2</li>
          <li>song 3</li>
        </ul>
      </div>
    );
  }
}

//* ******** APP COMPONENT *********//

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
    };
  }

  // LIFE CYCLE THIS RUNS AFTER THE COMPONENT MOUNTS //

  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 100);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? (
          <div>
            <h1 style={{ ...defaultStyle, fontSize: '54px' }}>
              {this.state.serverData.user.name}'s Playlist{' '}
              <i className="fa fa-music" aria-hidden="true" />
            </h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HourCounter playlists={this.state.serverData.user.playlists} />
            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div>
        ) : (
          <h1>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
            <span className="sr-only" />Loading...
          </h1>
        )}
      </div>
    );
  }
}

export default App;
