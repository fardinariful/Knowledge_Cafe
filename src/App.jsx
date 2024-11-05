import { useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Header from './assets/Components/Header/Header'
import Bookmarks from './assets/Components/Bookmarks/Bookmarks';

function App() {
const [bookmarks,setbookmark]=useState([]);

const handleclick= blog =>{
   const newbookmark=[...bookmarks,blog];
   setbookmark(newbookmark);
}

  return (
    <>
      <Header></Header>
      <div className='flex container mx-auto mt-10'>
      <Blogs handleclick={handleclick}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
     
      </div>

    
    </>
  )
}

export default App
