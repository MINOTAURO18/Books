import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Home from './views/home/Home'
import data from './data.json'
import './index.css'

function App() {

  const [books, setBooks] = useState([])
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    setBooks(data.library)
  }, [])
  


  return (
    <main className={darkMode ? 'black' : 'white'}>
    <Nav books={books} darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Routes>
      <Route path='/' element={<Home books={books}/>}/>
    </Routes>
    </main>
  )
}

export default App
