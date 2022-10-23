import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorite-context';

import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FavoritesContextProvider>
       <Router>
            <App />
       </Router>        
    </FavoritesContextProvider>

);
