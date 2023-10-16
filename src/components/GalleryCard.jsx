import React from 'react';
import { Card, Tooltip } from 'antd';
import { LikeOutlined, DislikeOutlined, LikeFilled, DislikeFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { toggleLike, toggleDislike } from '../redux/actions';

const GalleryCard = ({ photo }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(toggleLike(photo.id));
  };

  const handleDislike = () => {
    dispatch(toggleDislike(photo.id));
  };

  return (
    <Card
      title="Фото"
      extra={
        <div>
          <Tooltip title="Лайк">
            <span onClick={handleLike}>
              {photo.likes < 10 ? <LikeOutlined /> : <LikeFilled />}
              {photo.likes}
            </span>
          </Tooltip>
          <Tooltip title="Дизлайк">
            <span onClick={handleDislike}>
              {photo.dislikes < 10 ? <DislikeOutlined /> : <DislikeFilled />}
              {photo.dislikes}
            </span>
          </Tooltip>
        </div>
      }
    >
      <img src={`../images/${photo.image}`} alt="Фото" style={{ width: '100%' }} />


    </Card>
  );
};

export default GalleryCard;
