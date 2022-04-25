import { GET_TOKEN } from '../types';

const appReducer = (state, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default appReducer;
