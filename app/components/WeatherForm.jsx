import React from 'react';

export default React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <h1>WeatherCast</h1>
          <div>
            <input type="text" placeholder="Enter city name" ref="location" />
          </div>
          <div>
            <button type="submit">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});
