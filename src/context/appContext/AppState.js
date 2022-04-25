import { useReducer } from 'react';
import axios from 'axios';
import AppContext from './appContext';
import appReducer from './appReducer';

import { GET_TOKEN, TOKEN_ERROR } from '../types';

const AppState = props => {
  const initialState = {
    token: null,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load Token
  const getToken = async () => {
    try {
      const res = await axios.get('/auth');

      dispatch({ type: GET_TOKEN, payload: res.data });
    } catch (err) {
      dispatch({ type: TOKEN_ERROR });
    }
  };

  return (
    <AppContext.Provider
      value={{
        token: state.token,
        getToken,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
