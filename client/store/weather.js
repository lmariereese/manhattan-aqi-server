import axios from 'axios';

// ACTION TYPES
const GOT_CURRENT_WEATHER = 'GOT_CURRENT_WEATHER';

// ACTION CREATORS
const gotCurrentWeather = currentWeather => ({
  type: GOT_CURRENT_WEATHER,
  currentWeather
});

// THUNK CREATORS
export const getCurrentWeather = () => async dispatch => {
  const {data} = await axios.get('/api/weather/mostRecent');
  dispatch(gotCurrentWeather(data[0]));
};

let initialState = {
  current: {},
  history: []
};

// WEATHER REDUCER
const weather = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CURRENT_WEATHER:
      return {...state, current: action.currentWeather};
    default:
      return state;
  }
};

export default weather;
