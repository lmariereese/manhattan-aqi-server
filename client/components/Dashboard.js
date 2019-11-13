import React from 'react';
import {connect} from 'react-redux';
import {getCurrentWeather} from '../store/weather';
import {getCurrentPollution} from '../store/pollution';

class Dashboard extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  componentDidMount() {
    this.props.getCurrentWeather();
    this.props.getCurrentPollution();
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
              <p>Temperature: {currentWeather.temperature}</p>
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
