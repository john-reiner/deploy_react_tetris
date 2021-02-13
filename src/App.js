import React, { useState } from 'react'

import './App.css';
import Tetris from './components/Tetris';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

const App = () =>  {

  const [loginShow, setLoginShow] = useState(true);
  const [signUpShow, setSignUpShow] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedinUser, setLoggedinUser] = useState(false)
  const [loggingIn, setLoggingIn] = useState(false)
  const [errors, setErrors] = useState('')

  const handleLoginShow = () => setLoginShow(true);
  const handleLoginClose = () => setLoginShow(false);
  const handleSignUpClose = () => setSignUpShow(false)

  const handleUsernameChange = e => setUsername(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

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
              console.log(user)
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

      <Tetris 
        loggedinUser={loggedinUser} 
      />

    </div>
  )
}

export default App
