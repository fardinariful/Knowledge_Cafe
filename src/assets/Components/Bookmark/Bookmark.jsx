import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 w-96 rounded-xl ml-4'>
            <h4 className='text-center'>{title}</h4>
        </div>
    );
};

Bookmark.propTypes={
    bookmark:PropTypes.object
}
export default Bookmark;