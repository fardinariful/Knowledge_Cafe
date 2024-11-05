import { useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Header from './assets/Components/Header/Header'
import Bookmarks from './assets/Components/Bookmarks/Bookmarks';

function App() {
const [bookmarks,setbookmark]=useState([]);
const [readingtime,setreadingtime]=useState(0);
const handleclick= blog =>{
   const newbookmark=[...bookmarks,blog];
   setbookmark(newbookmark);
}
const handleclick2=(time,id)=>{
  const newspendtime=readingtime+time;
  setreadingtime(newspendtime);
 
  const remainingbook=bookmarks.filter(bookmark => bookmark.id !== id);
  setbookmark(remainingbook);

}


  return (
    <>
      <Header></Header>
      <div className='flex container mx-auto mt-10'>
      <Blogs handleclick={handleclick} handleclick2={handleclick2}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingtime={readingtime}></Bookmarks>
     
      </div>

    
    </>
  )
}

export default App
