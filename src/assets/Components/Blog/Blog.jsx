import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog,handleclick,handleclick2}) => {
   const {id,title,author_name,cover_img,author_img,reading_time,hashtag,posted_date}=blog;
    
   
   return (
        <div className='mt-4'>
            <img className='w-full' src={cover_img} alt="" />
            <div className='flex justify-between items-center mt-3'>
                <div className='flex gap-2 justify-center items-center'>
                       <img className='w-10 rounded-3xl' src={author_img} alt="" />
                       <div>
                         <p>{author_name}</p>
                          <p>{posted_date}</p>
                       </div>
                       
                </div>

                <div className='flex justify-center items-center text-center'>
                    <h3><span>{reading_time}</span> min read
                    <button className='ml-2 text-xl' onClick={()=> handleclick(blog)}>
                        <FaRegBookmark></FaRegBookmark>
                        
                    </button>
                    </h3>
                </div>
                
            </div>
            <div>
             <h4 className='text-2xl font-bold'>{title}</h4>
            </div>
            <div>

               { 
               hashtag.map((hash,idx) => <span key={idx} ><a href=""># {hash}</a></span>)
               }
                </div>
            
            <div>
       <button className='text-blue-500 underline' onClick={()=>handleclick2(reading_time,id)}>Mark as Read</button>
            </div>
        </div>
    );
};


Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleclick:PropTypes.func,
    handleclick2:PropTypes.func
}
export default Blog;