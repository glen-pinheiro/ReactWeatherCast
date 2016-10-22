import React from 'react';

export default React.createClass({
  render: function() {
    var location = this.props.location;
    var temp = this.props.temp;
    return (
      <h3 className="text-center">Temprature in {location} is {temp}C.</h3>
    );
  }
});
