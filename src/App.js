import React, { useEffect, useState } from 'react'
// import {Button, Modal, Form} from 'react-bootstrap'

import './App.css';
// import Tetris from './components/Tetris';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
// import NavBar from './components/NavBar';
import MainBody from './components/MainBody';
// import LeaderBoard from './components/LeaderBoard'



const App = () =>  {

  const [users, setUsers] = useState([])
  const [userId, setUserId] = useState('1')
  const [loginShow, setLoginShow] = useState(true);
  const [signUpShow, setSignUpShow] = useState(false)
  const [username, setUsername] = useState('guest')

  const handleLoginShow = () => setLoginShow(true);
  const handleLoginClose = () => setLoginShow(false);
  const handleSignUpClose = () => setSignUpShow(false)

  const logginUser = id => {
    setUserId(id)
  }

  const handleCreateAccountClick = () => {
    handleLoginClose()
    setSignUpShow(true)
  }

  useEffect(() => {
    if (users.length > 0) {
      let user = users.find(user => user.id === userId)
      let username = user.username
      setUsername(username)      
    }
  }, [userId])

  useEffect(() => {
    fetch('https://blooming-brushlands-29268.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then(users => setUsers(users))
  }, [loginShow])

  return (
    <div className="App">
      
      <LogIn handleCreateAccountClick={handleCreateAccountClick} logginUser={logginUser} users={users} handleLoginClose={handleLoginClose} loginShow={loginShow}/>
      <SignUp handleLoginShow={handleLoginShow} signUpShow={signUpShow} handleSignUpClose={handleSignUpClose} />
      <MainBody username={username} userId={userId}/>
      {/* <Tetris userId={userId} /> */}
      {/* <LeaderBoard scores={scores}/> */}
    </div>
  )
}

export default App
