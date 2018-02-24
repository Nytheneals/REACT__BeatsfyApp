import React, { Component } from 'react';

const defaultStyle = {
  color: '#fff',
};

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

export default Aggregate;
