import { connect } from 'react-redux';
import GalleryPage from './GalleryPage';
import { addComment, toggleLike , toggleDislike } from '../redux/actions';



const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddComment: (photoId, username, comment) => dispatch(addComment(photoId, username, comment)),
    onLikePhoto: (photoId) => dispatch(toggleLike(photoId)),
    onDislikePhoto: (photoId) => dispatch(toggleDislike(photoId)),
  };
};

const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(GalleryPage);

export default GalleryContainer;
