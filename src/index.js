import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore();
console.log('initStore', store.getState())

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);

serviceWorker.unregister();
