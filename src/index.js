import React from 'react';
import ReactDOM from 'react-dom';

// -- Styles
import GlobalReset from './styles/resets';

// -- Component
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalReset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
