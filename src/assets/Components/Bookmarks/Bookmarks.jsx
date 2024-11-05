import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';
const Bookmarks = ({bookmarks,readingtime}) => {
    return (
     
      <div>
         <div className="bg-purple-300 p-4 ml-3 mt-4 rounded-xl">
            <h2 className="text-center text-2xl">Spend time to read:{readingtime}</h2>
         </div>
      
        <div className="w-full bg-gray-300 ml-3 mt-10 flex flex-col items-center rounded-xl">
          <h3 className="text-center text-3xl mt-4 pt-4 ">Bookmarked Blog:{bookmarks.length}</h3> 
           {
            bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
           }
        </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingtime:PropTypes.number
}
export default Bookmarks;



