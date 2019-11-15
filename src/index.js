import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'dotenv/config';
const config = process.env.REACT_APP_SOCKETURL;
console.log(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
