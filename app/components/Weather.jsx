import React from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

export default React.createClass({
  getInitialState: function() {
    return {
      //location: 'Miami',
      //temp: 34
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var vm = this;
    vm.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then(function(temp) {
      vm.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      vm.setState({ isLoading: false });
      alert(errorMessage);
    });
  },
  render: function() {
    var location = this.state.location;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>;
      }
      else if (location && temp) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    return (
      <div>
        <h1>Weather Component</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});
