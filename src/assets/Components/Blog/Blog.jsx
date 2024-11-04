import PropTypes from 'prop-types';

const Blog = ({blog}) => {
   const {title,author_name,cover_img,author_img,reading_time,hashtag,posted_date}=blog;
    
   
   return (
        <div>
            <img className='w-10/12' src={cover_img} alt="" />
            <div className='flex justify-between items-center mt-3'>
                <div className='flex gap-2 justify-center items-center'>
                       <img className='w-10 rounded-3xl' src={author_img} alt="" />
                       <div>
                         <p>{author_name}</p>
                          <p>{posted_date}</p>
                       </div>
                       
                </div>

                <div className=''>
                    <h3><span>{reading_time}</span> min read</h3>
                </div>
            </div>
            <div>
             <h4 className='text-2xl font-bold'>{title}</h4>
            </div>
            <div>

            </div>
        </div>
    );
};


Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;