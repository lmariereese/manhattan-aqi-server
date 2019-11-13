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
    return (
      <div className="wrapper">
        <h2>Dashboard</h2>
        {/* {this.props.currentWeather ? <p>{this.props.currentWeather}</p> : ''} */}
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
