import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Test from './Test'
import Post from './components/Post'
import Comment from './components/Comment'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/post' element={<Post />}/>
        <Route path='/comment' element={<Comment />}/>
      </Routes>
    </>
  )
}

export default App