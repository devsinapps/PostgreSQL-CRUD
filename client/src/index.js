import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import './components/style/minify/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));

serviceWorker.unregister();
