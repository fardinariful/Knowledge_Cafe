import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmark from './assets/Components/Bookmarks/Bookmark'
import Header from './assets/Components/Header/Header'

function App() {
 

  return (
    <>
      <Header></Header>
      <div className='flex container mx-auto mt-10'>
      <Blogs></Blogs>
      <Bookmark></Bookmark>
      </div>

    
    </>
  )
}

export default App
