import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './css/bootstrap.css';
import './style.css';
import {Links} from './component/App';
import reducers from './store/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Links />
    </Provider>
  </React.StrictMode>,
  document.getElementById('Dv')
);