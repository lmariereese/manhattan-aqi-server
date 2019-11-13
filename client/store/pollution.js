import axios from 'axios';

// ACTION TYPES
const GOT_CURRENT_POLLUTION = 'GOT_CURRENT_POLLUTION';

// ACTION CREATORS
const gotCurrentPollution = currentPollution => ({
  type: GOT_CURRENT_POLLUTION,
  currentPollution
});

// THUNK CREATORS
export const getCurrentPollution = () => async dispatch => {
  const {data} = await axios.get('/api/pollution/mostRecent');
  dispatch(gotCurrentPollution(data[0]));
};

let initialState = {
  current: {},
  history: []
};

// POLLUTION REDUCER
const pollution = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CURRENT_POLLUTION:
      return {...state, current: action.currentPollution};
    default:
      return state;
  }
};

export default pollution;
