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
  const [loggedinUser, setLoggedinUser] = useState({})
  const [loggingIn, setLoggingIn] = useState(false)

  const handleLoginShow = () => setLoginShow(true);
  const handleLoginClose = () => setLoginShow(false);
  const handleSignUpClose = () => setSignUpShow(false)

  const handleUsernameChange = e => setUsername(e.target.value)
  const handlePasswordChange = e => setPassword(e.target.value)

    const loginUser = () => {
        fetch('https://react-tetris-backend.herokuapp.com/api/v1/users')
        .then(response => response.json())
        .then(users => {
            let user = users.find(user => user.username === username)
            if (user && user.password ===  password) {
                setLoggedinUser(user)
                setLoggingIn(false)
                handleLoginClose()
            } else {
                alert('Wrong Username or Password')
                setLoggingIn(false)
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
      
      <LogIn loggingIn={loggingIn} username={username} password={password} handlePasswordChange={handlePasswordChange} handleUsernameChange={handleUsernameChange} handleCreateAccountClick={handleCreateAccountClick} handleLoginSubmit={handleLoginSubmit} handleLoginClose={handleLoginClose} loginShow={loginShow}/>
      <SignUp handleLoginShow={handleLoginShow} signUpShow={signUpShow} handleSignUpClose={handleSignUpClose} />
      <Tetris loggedinUser={loggedinUser} />

    </div>
  )
}

export default App
