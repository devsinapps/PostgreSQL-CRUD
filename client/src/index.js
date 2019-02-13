import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import './components/style/minify/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

import rootReducers from './store/reducers/rootReducers'

const store = createStore(rootReducers)

ReactDOM.render(
	<Provider store={store}>
	<Routes />
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();
