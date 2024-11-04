import { useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmark from './assets/Components/Bookmarks/Bookmark'
import Header from './assets/Components/Header/Header'

function App() {
const [bookmark,setbookmark]=useState([]);

const handleclick= blog =>{
   const newbookmark=[...bookmark,blog];
   setbookmark(newbookmark);
}

  return (
    <>
      <Header></Header>
      <div className='flex container mx-auto mt-10'>
      <Blogs handleclick={handleclick}></Blogs>
      <Bookmark bookmark={bookmark}></Bookmark>
      </div>

    
    </>
  )
}

export default App
