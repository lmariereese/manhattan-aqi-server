import React from 'react';
import {connect} from 'react-redux';
import {getCurrentWeather} from '../store/weather';
import {getCurrentPollution} from '../store/pollution';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.toFahrenheit = this.toFahrenheit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentWeather();
    this.props.getCurrentPollution();
  }

  toFahrenheit(temp) {
    return temp * 1.8 + 32;
  }

  render() {
    const currentWeather = this.props.currentWeather;
    const currentPollution = this.props.currentPollution;
    return (
      <div className="wrapper">
        <h2>Dashboard</h2>
        <div>
          {currentWeather && currentPollution ? (
            <div className="current-condition-div">
              <p>
                Temperature:{' '}
                {`${this.toFahrenheit(currentWeather.temperature)}°F`}
              </p>
              <p>Humidity: {currentWeather.humidity}%</p>
              <p>Pressure: {currentWeather.pressure}</p>
              <p>Wind Speed: {currentWeather.windSpeed}</p>
              <p>Wind Direction: {currentWeather.windDirection}</p>
              <p>AQI: {currentPollution.aqi}</p>
              <p>Main Pollutant: {currentPollution.mainPollutant}</p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentWeather: state.weather.current,
  currentPollution: state.pollution.current
});

const mapDispatchToProps = dispatch => ({
  getCurrentWeather: () => dispatch(getCurrentWeather()),
  getCurrentPollution: () => dispatch(getCurrentPollution())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
