import React from 'react';
import Nav from 'Nav';

export default React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <h2></h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
});
