// redux/reducers.js
const initialState = {
    photos: [
        {
            id: 1,
            title: 'Фото 1',
            image: `https://ru.wikipedia.org/wiki/Adobe_Photoshop#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Adobe_Photoshop_CC_icon.svg`,
            description: 'Описание фотографии 1',
            comments: [],
            likes: 0,
            dislikes: 0,
            isExpanded: false, // Флаг для раскрытия/скрытия карточки
        },
        {
            id: 2,
            title: 'Фото 2',
            image: `https://ru.wikipedia.org/wiki/Adobe_Photoshop#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Adobe_Photoshop_CC_icon.svg`,
            description: 'Описание фотографии 2',
            comments: [],
            likes: 0,
            dislikes: 0,
            isExpanded: false,
        },
        // Добавьте больше фотографий по аналогии
    ],
};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            // Добавляем комментарий к фотографии
            const { photoId, username, comment } = action.payload;
            const updatedPhotos = state.photos.map((photo) => {
                if (photo.id === photoId) {
                    return {
                        ...photo,
                        comments: [
                            ...photo.comments,
                            {
                                username,
                                comment,
                            },
                        ],
                    };
                }
                return photo;
            });
            return { ...state, photos: updatedPhotos };

        case 'TOGGLE_LIKE':
            // Увеличиваем счетчик лайков к фотографии
            const likedPhotoId = action.payload;
            const likedPhotos = state.photos.map((photo) => {
                if (photo.id === likedPhotoId) {
                    return {
                        ...photo,
                        likes: photo.likes + 1,
                    };
                }
                return photo;
            });
            return { ...state, photos: likedPhotos };

        case 'TOGGLE_DISLIKE':
            // Увеличиваем счетчик дизлайков к фотографии
            const dislikedPhotoId = action.payload;
            const dislikedPhotos = state.photos.map((photo) => {
                if (photo.id === dislikedPhotoId) {
                    return {
                        ...photo,
                        dislikes: photo.dislikes + 1,
                    };
                }
                return photo;
            });
            return { ...state, photos: dislikedPhotos };

        case 'TOGGLE_EXPAND_PHOTO':
            const toggledPhotoId = action.payload;
            const toggledPhotos = state.photos.map((photo) => {
                if (photo.id === toggledPhotoId) {
                    return {
                        ...photo,
                        isExpanded: !photo.isExpanded, // Инвертируем флаг
                    };
                }
                return photo;
            });
            return { ...state, photos: toggledPhotos };

        default:
            return state;
    }
};

export default galleryReducer;
