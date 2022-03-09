import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
import store from './store';
import { App } from './app/App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
      <App />
      {/* </ConnectedRouter> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
