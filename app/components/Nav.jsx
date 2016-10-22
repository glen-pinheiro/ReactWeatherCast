import React from 'react';
import {Link, IndexLink} from 'react-router';

export default React.createClass({
  onSearch: function(e) {
    e.preventDefault();
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">WeatherCast</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>WeatherCast</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About Me</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Demo link</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search" />
              </li>
              <li>
                <input type="submit" className="button" value="Search" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});
