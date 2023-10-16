import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import store from './redux/store'; // Путь к вашему store.js
import HomePage from './components/Home'; // Импортируйте ваш компонент "HomePage" здесь
import GalleryPage from './components/GalleryPage'; // Импортируйте ваш компонент "GalleryPage" здесь
// Импортируйте ваш компонент "ContactsPage" здесь
import ContactsPage from './components/ContactsPage';
import GalleryContainer from './components/GalleryContainer';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/gallery">Галерея</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryContainer />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}
export default App;


