// src/components/CommentSection.jsx
import React, { useState } from 'react';
import { Comment, Tooltip, Input, Button } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/actions';

const CommentSection = ({ photo }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (name && comment) {
      dispatch(addComment(photo.id, name, comment));
      setName('');
      setComment('');
    }
  };

  return (
    <Comment
      content={
        <div>
          {photo.comments.map((c, index) => (
            <p key={index}>
              <strong>{c.name}</strong>: {c.text}
            </p>
          ))}
          <Input
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Ваш комментарий"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button onClick={handleAddComment}>Добавить комментарий</Button>
        </div>
      }
    />
  );
};

export default CommentSection;
