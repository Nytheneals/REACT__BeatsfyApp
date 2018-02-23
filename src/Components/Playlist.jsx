import React, { Component } from 'react';

// FILTER

class Playlist extends Component {
  render() {
    return (
      <div className="App">
        <img
          src="http://fq8ku9wqwk7gai1z3frl16nd.wpengine.netdna-cdn.com/wp-content/uploads/2017/10/Miguel-16-9-996x515.jpg"
          alt=""
        />
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

export default Playlist;
