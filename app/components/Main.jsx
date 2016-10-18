import React from 'react';
import Nav from 'Nav';

export default React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <h2>Main component</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
});
