import React, { Component } from 'react';
import Filter from './Components/Filter';
import Aggregate from './Components/Aggregate';
import Playlist from './Components/Playlist';
import './App.css';

// FAKE DATA
const fakeServerData = {
  user: {
    name: 'Nathane',
  },
};

// PLAYLIST LIST DATA

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
        <h1>Kandafy</h1>
        <h4>Music for Wakandans</h4>
        <h4>{this.state.serverData.user && this.state.serverData.user.name}'s Playlist</h4>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
      </div>
    );
  }
}

export default App;
