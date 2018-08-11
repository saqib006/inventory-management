import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routing';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {store} from './store/index';
import Loader from './components/Loader';

ReactDOM.render(<Provider store={store}><div><Loader /><Routing /></div></Provider>, document.getElementById('root'));
registerServiceWorker();
