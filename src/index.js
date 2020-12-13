import React from 'react';
import ReactDOM from 'react-dom';
import App from './Container/App.js';
import {Provider} from 'react-redux'
import store from './redux/store.js'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // <React.StrictMode>
    // <BrowserRouter>
    // </BrowserRouter>
  // {/* </React.StrictMode>, */}
  document.getElementById("root")
)

