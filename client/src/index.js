import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store';
import ScrollTop from './ScrollToTop';

import './index.scss';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ScrollTop>
                <App />
            </ScrollTop>
        </BrowserRouter>
    </Provider>, 
document.getElementById('root')
);
