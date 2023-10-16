// galleryReducer.js
const initialState = {
    photos: [],
  };
  
  const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PHOTO':
        return {
          ...state,
          photos: [...state.photos, action.payload],
        };
      case 'DELETE_PHOTO':
        return {
          ...state,
          photos: state.photos.filter((photo) => photo.id !== action.payload),
        };
      // Другие обработчики действий
      default:
        return state;
    }
  };
  
  export default galleryReducer;
  