import { useEffect, useState } from 'react'
import Nav from './components/nav/Nav'
import Home from './views/home/Home'
import data from './data.json'
import './index.css'

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    setBooks(data.library)
  }, [])
  // const Libros = [...data.library]
  // console.log(Libros)


  return (
    <>
    <Nav books={books} setBooks={setBooks}/>
     <Home books={books}/>
    </>
  )
}

export default App
