import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-3 ">
          <h3 className="text-center text-3xl mt-2">Bookmarked Blog:{bookmarks.length}</h3> 
           {
            bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
           }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array
}
export default Bookmarks;



