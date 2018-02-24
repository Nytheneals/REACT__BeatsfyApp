import React, { Component } from 'react';
// import Filter from './Components/Filter';
// import Aggregate from './Components/Aggregate';
// import Playlist from './Components/Playlist';
import './App.css';

// DEFAULT STYLES

const defaultStyle = {
  color: '#fff',
};

// FAKE DATA
const fakeServerData = {
  user: {
    name: 'Nathane',
    playlists: [
      {
        name: 'Weekly discover',
        songs: ['Le song ', 'the song', 'Adorn'],
      },
      {
        name: 'Weekly discover',
        songs: ['Le song ', 'the song', 'Adorn'],
      },
      {
        name: 'Weekly discover',
        songs: ['Le song ', 'the song', 'Adorn'],
      },
      {
        name: 'Weekly discover',
        songs: ['Le song ', 'the song', 'Adorn'],
      },
    ],
  },
};

// PLAYLIST COMPONENT
class Playlist extends Component {
  render() {
    const data = this.props.playlist;
    console.log(data);
    return (
      <div style={{ ...defaultStyle, 'font-size': '54px' }}>
        <img src="" alt="" />
        <h3>Playlist Name</h3>
        <ul>
          <li>song 1</li>
          <li>song 2</li>
          <li>song 3</li>
        </ul>
      </div>
    );
  }
}

// FILTER
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

// AGGREGATE

class Aggregate extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

// START OF APP COMPONENT

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
    };
  }

  // LIFE CYCLE THIS RUNS AFTER THE COMPONENT MOUNTS
  componentDidMount() {
    this.setState({ serverData: fakeServerData });
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? (
          <div>
            <h4 style={{ ...defaultStyle, 'font-size': '54px' }}>
              {this.state.serverData.user.name}'s Playlist
            </h4>
            <Aggregate />
            <Filter />
            <Playlist playlist={this.state.serverData.user.playlists} />
            <Playlist playlist={this.state.serverData.user.playlists} />
            <Playlist playlist={this.state.serverData.user.playlists} />
            <Playlist playlist={this.state.serverData.user.playlists} />
          </div>
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    );
  }
}

export default App;
