import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({handleclick,handleclick2}) => {

    const [blogs,setblogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setblogs(data))
    },[])
    return (
        <div className="w-2/3">
          
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handleclick={handleclick} handleclick2={handleclick2}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleclick:PropTypes.func,
    handleclick2:PropTypes.func
}

export default Blogs;