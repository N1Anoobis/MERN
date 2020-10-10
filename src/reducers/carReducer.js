import axios from 'axios';
export const GET_ITEMS = 'GET_ITEMS';

export const getCars = () => dispatch => {
 
  axios
    .get('/api/cars')
    .then(res => 
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      }));
};

const initialState = {
  cars:[],
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ITEMS:
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
}