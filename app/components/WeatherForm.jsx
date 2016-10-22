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
          <h1 className="text-center page-title">Find Weather</h1>
          <div>
            <input type="search" placeholder="Enter city name" ref="location" />
          </div>
          <div>
            <button className="button expanded hollow" type="submit">Find out.</button>
          </div>
        </form>
      </div>
    );
  }
});
