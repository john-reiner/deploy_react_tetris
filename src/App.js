import React, { useState, useEffect } from 'react'

import './App.css';
import Tetris from './components/Tetris';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar'
import DisplayUser from './components/DisplayUser'

const App = () =>  {

  const [loginShow, setLoginShow] = useState(false);
  const [signUpShow, setSignUpShow] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedinUser, setLoggedinUser] = useState({})
  const [loggingIn, setLoggingIn] = useState(false)
  const [errors, setErrors] = useState('')
  const [userModalShow, setUserModalShow] = useState(false)

  const handleLoginShow = () => setLoginShow(true);
  const handleLoginClose = () => setLoginShow(false);
  const handleSignUpClose = () => setSignUpShow(false)
  const handleUserModalShow = () => setUserModalShow(true)
  const handleUserModalClose = () => setUserModalShow(false)

  const handleUsernameChange = e => setUsername(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

  const logout = () => {
    localStorage.removeItem('userToken');
    window.location.reload(false);
  }

  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      getUser()
    } else {
      setLoginShow(true)
    }
  }, [])

  const getUser = () => {
    fetch(`https://react-tetris-backend.herokuapp.com/api/v2/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "bearer " + localStorage.getItem('userToken')
      }
    })
    .then(response => response.json())
    .then(user => setLoggedinUser(user))
  }

  const loginUser = () => {
    fetch('https://react-tetris-backend.herokuapp.com/api/v2/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    })
    .then(response => response.json())
    .then(user => {
      if (user.status === 'success') {
          localStorage.setItem('userToken', user.token);
          setLoggedinUser({id: user.id, username: user.username})
          setLoggingIn(false)
          handleLoginClose()
      } else {
          setLoggingIn(false)
          setErrors(user.message)
      }
    })
    setLoggingIn(true)
  }

  const handleLoginSubmit = e => {
    e.preventDefault()
    loginUser()
  }

  const handleCreateAccountClick = () => {
    handleLoginClose()
    setSignUpShow(true)
  }

  return (
    <div className="App">

      <LogIn 
        errors={errors} 
        loggingIn={loggingIn} 
        username={username} 
        password={password} 
        handlePasswordChange={handlePasswordChange} 
        handleUsernameChange={handleUsernameChange} 
        handleCreateAccountClick={handleCreateAccountClick} 
        handleLoginSubmit={handleLoginSubmit} 
        handleLoginClose={handleLoginClose} 
        loginShow={loginShow}

      />

      <SignUp 
        handleLoginShow={handleLoginShow} 
        signUpShow={signUpShow} 
        handleSignUpClose={handleSignUpClose}

      />

      <DisplayUser 
        userModalShow={userModalShow}
        handleUserModalClose={handleUserModalClose}
        logout={logout}
      />

      <Tetris 
        loggedinUser={loggedinUser}
        handleUserModalShow={handleUserModalShow}
        
      />

    </div>
  )
}

export default App
