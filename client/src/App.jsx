import './App.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Book from './pages/Book'
import Add from './pages/Add'
import Update from './pages/Update'
import axios from 'axios'

import PrivateRoute from './util/PrivateRoute'
import { AuthContext } from './util/AuthContext'

function App() {

  const [authen, setAuthen] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(res => {
        if (res.data.Status === "Success") {
          setAuthen(true)
          setName(res.data.name)
        } else {
          setAuthen(false)
          setMessage(res.data.Error)
        }
      })
      .then(()=>{
        setLoading(false)
  
      })
      .then(err => console.log(err))
  })

  if (isLoading){
    return(
        <div>Loading ...</div>
    )
}

  return (
    <AuthContext.Provider value={{authen, setAuthen}}>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>

          <Route path='/' element={<PrivateRoute authen={authen} />}>
            <Route path='/book' element={<Book />}></Route>
            <Route path='/add' element={<Add />}></Route>
            <Route path='/update/:id' element={<Update />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
