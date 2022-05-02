import { useReducer } from 'react';
import axios from 'axios';
import AppContext from './appContext';
import appReducer from './appReducer';

import { GET_TOKEN, TOKEN_ERROR } from '../types';
const AppState = props => {
  const initialState = {
    token: null,
    howToSteps: [
      {
        id: 1,
        title: 'Connect your wallet',
        body: 'Set up your wallet to transact in $CFX and click connect to link your selected wallet',
        image: '../../img/one.svg',
      },
      {
        id: 2,
        title: 'Upload your land/asset',
        body: 'Attach your land/asset and enter the required details about the asset to be listed for sale',
        image: '../../img/two.svg',
      },
      {
        id: 3,
        title: 'List item for sale',
        body: 'Review the asset’s details and click on confirm to list your items publicly for sale',
        image: '../../img/three.svg',
      },
    ],
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
        howToSteps: state.howToSteps,
        getToken,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
