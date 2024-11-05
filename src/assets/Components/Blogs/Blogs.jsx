import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({handleclick}) => {

    const [blogs,setblogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[])
    return (
        <div className="w-2/3">
          
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handleclick={handleclick}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleclick:PropTypes.func
}

export default Blogs;