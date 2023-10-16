import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

// Остальной ваш код здесь

import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import galleryReducer from './redux/reducers';

// Create the Redux store
const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    // You can add more reducers if needed
  },
});

// Create the root for concurrent mode
const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>
);
