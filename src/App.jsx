import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Home from './views/home/Home'
import data from './data.json'
import './index.css'

function App() {

  const [books, setBooks] = useState({
    allBooks: [],
    allBooks2: []
  })
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  })

  useEffect(() => {
    setBooks({
      allBooks: data.library,
      allBooks2: data.library
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  


  return (
    <main className={darkMode ? 'black' : 'white'}>
    <Nav books={books} setBooks={setBooks} darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Routes>
      <Route path='/' element={<Home books={books} setBooks={setBooks}/>}/>
    </Routes>
    </main>
  )
}

export default App
