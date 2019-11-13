import React from 'react';
import {connect} from 'react-redux';
import {getCurrentWeather} from '../store/weather';

class Dashboard extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  componentDidMount() {
    this.props.getCurrentWeather();
  }

  render() {
    return (
      <div className="wrapper">
        <h2>Dashboard</h2>
        {this.props.currentWeather ? <p>{this.props.currentWeather}</p> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentWeather: state.weather.currentWeather
});

const mapDispatchToProps = dispatch => ({
  getCurrentWeather: () => dispatch(getCurrentWeather())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
