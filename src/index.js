import React from 'react';
import ReactDOM from 'react-dom';

// Modules

// Config
import './firebase';

// Styles
import 'bootswatch/dist/litera/bootstrap.min.css';

// Components
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
