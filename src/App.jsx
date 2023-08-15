import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Home from './views/home/Home'
import data from './data.json'
import './index.css'

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    setBooks(data.library)
  }, [])
  


  return (
    <>
    <Nav books={books}/>
    <Routes>
      <Route path='/' element={<Home books={books}/>}/>
    </Routes>
    </>
  )
}

export default App
