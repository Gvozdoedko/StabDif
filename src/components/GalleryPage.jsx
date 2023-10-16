// src/components/GalleryPage.jsx
import React from 'react';
import { List } from 'antd';
import GalleryCard from './GalleryCard';
import { useSelector } from 'react-redux';

const GalleryPage = () => {
  const gallery = useSelector((state) => state.photos); // Изменили с 'state.gallery' на 'state.photos'

  return (
    <div>
      <h1>Галерея фотографий</h1>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={gallery}
        renderItem={(photo) => (
          <List.Item>
            <GalleryCard photo={photo} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default GalleryPage;
