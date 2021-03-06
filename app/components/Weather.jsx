import React from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

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
    vm.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(function(temp) {
      vm.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(e) {
      vm.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  render: function() {
    var location = this.state.location;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;
    var errorMessage = this.state.errorMessage;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather...</h3>;
      }
      else if (location && temp) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    }

    return (
      <div>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});
