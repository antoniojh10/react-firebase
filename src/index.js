import React from 'react';
import ReactDOM from 'react-dom';

// Modules

// Config
import './firebase';

// Styles
import 'bootswatch/dist/litera/bootstrap.min.css';
import './assets/styles/index.scss';

// Components
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));
