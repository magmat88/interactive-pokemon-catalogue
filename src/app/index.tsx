import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './store';

import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
      <App />
    </Provider>
    {/* </ConnectedRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);
