import React, { Component } from 'react';

const defaultStyle = {
  color: '#fff',
};

// FILTER
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

export default Playlist;
