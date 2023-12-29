
import './App.css';
import AddNewMovie from './Components/AddNewMovie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Search from './Components/Search'
import React, { useState } from 'react'
import MovieList from './Components/MovieList';
import { moviesData } from './data';
import Info from './Components/Info';

function App() {
  const[ data,setData] = useState(moviesData);
  const [textSearch,setTextSearch] = useState("")
  const [rating,setRating] = useState("")
  const handleSearch=(x)=>setTextSearch(x)
  const handleRating=(x)=>setRating(x)
  const handleDelete=(id)=>setData(data.filter(el=>el.id!==id))
  const handleAdd=(newMovie=>setData([...data,newMovie]))
  const handleEdit=(editMovie)=>setData(data.map(el=>el.id===editMovie.id?editMovie:el))

  console.log(data);
  return (
    <div className='app'>
      <Search textSearch={textSearch} rating={rating} handleSearch={handleSearch} handleRating={handleRating}/>
      <AddNewMovie  handleAdd={handleAdd}/>
      <Router>
        <Routes>
      <Route path='/' element={
      <MovieList list={data.filter(el=>el.name.toLowerCase().includes(textSearch.toLowerCase())&&el.rating>=rating)} handleDelete={handleDelete} handleEdit={handleEdit} />
    }></Route>
     <Route path="/info/:id" element={<Info list={data}></Info>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

