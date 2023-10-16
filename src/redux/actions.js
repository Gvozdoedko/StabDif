// src/redux/actions.js
export const addComment = (photoId, username, comment) => {
    return {
      type: 'ADD_COMMENT',
      payload: {
        photoId,
        username,
        comment,
      },
    };
  };
  
  export const toggleLike = (photoId) => {
    return {
      type: 'TOGGLE_LIKE',
      payload: photoId,
    };
  };
  
  export const toggleDislike = (photoId) => {
    return {
      type: 'TOGGLE_DISLIKE',
      payload: photoId,
    };
  };
  