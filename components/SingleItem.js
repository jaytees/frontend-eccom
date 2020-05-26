import React, { Component } from 'react';

class SingleItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default SingleItem;
