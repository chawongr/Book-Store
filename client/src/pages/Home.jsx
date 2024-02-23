import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const [auth, setAuth] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  axios.defaults.withCredentials = true

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then(res => {
        if (res.data.Status === "Success") {
          setAuth(true)
          setName(res.data.name)
        } else {
          setAuth(false)
          setMessage(res.data.Error)
        }
      })
      .then(err => console.log(err))
  })

  const handleDelete = () => {
    axios.get('http://localhost:3001/logout')
      .then(res => {
        location.reload(true)
      }).catch(err => console.log(err))
  }

  return (
    <div>
      {
        auth ?
          <div>
            <h3>You are authorized --- {name} </h3>
            <button onClick={handleDelete} className='bg-red-500'>Log out</button>
          </div>
          :
          <div>
            <h3>{message}</h3>
            <h3>Log in now</h3>
            <Link to="/login" className='bg-cyan-500'>Log in</Link>
          </div>
      }
    </div>
  )
}

export default Home
