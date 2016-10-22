import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div className="row">
        <h1 className="text-center">About</h1>
        <p>I'm Glen Pinheiro, a web developer living and working in India, Kerala. I love to create simple, effective, user friendly applications with the aim to add value my clients and to make the web more better place.</p>
        <p>Please help me build a better weatherforcast app. Thank you.</p>
        <p>Find me on: <a href="http://github.com/glen-pinheiro" target="_blank">Github</a></p>
      </div>
    );
  }
});
