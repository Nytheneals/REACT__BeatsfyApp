import React, { Component } from 'react';

// FILTER

class Playlist extends Component {
  render() {
    const data = this.props.playlist;
    console.log(data);
    return (
      <div className="playlist">
        <div>
          <img
            src="http://fq8ku9wqwk7gai1z3frl16nd.wpengine.netdna-cdn.com/wp-content/uploads/2017/10/Miguel-16-9-996x515.jpg"
            alt=""
          />
        </div>

        <div>
          <h3>Playlist Name</h3>
        </div>
        <div>
          <ul>
            <li>song 1</li>
            <li>song 2</li>
            <li>song 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Playlist;
