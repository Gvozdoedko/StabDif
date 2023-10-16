// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import galleryReducer from './galleryReducer';
import thunk from 'redux-thunk'; // Если используете redux-thunk

const rootReducer = combineReducers({
  gallery: galleryReducer, // Можете использовать другое имя ключа
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Применение middleware

export default store;
