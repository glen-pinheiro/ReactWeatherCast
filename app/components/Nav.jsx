import React from 'react';
import {Link, IndexLink} from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div>
        <h1>Nav Component</h1>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>WeatherCast</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About Me</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Demo link</Link>
      </div>
    );
  }
})
