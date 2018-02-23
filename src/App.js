import React, { Component } from 'react';
import Filter from './Components/Filter';
import Aggregate from './Components/Aggregate';
import Playlist from './Components/Playlist';
import './App.css';

class App extends Component {
  render() {
    // const name = 'Wakanda';
    return (
      <div className="App">
        <h1>Kandafy</h1>
        <h4>Music for Wakandans</h4>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
      </div>
    );
  }
}

export default App;
