import React, { useState } from 'react'
// import {Button, Modal, Form} from 'react-bootstrap'

import './App.css';
import Tetris from './components/Tetris';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
// import NavBar from './components/NavBar';
// import MainBody from './components/MainBody';
// import LeaderBoard from './components/LeaderBoard'



const App = () =>  {

  // const [users, setUsers] = useState([])
  // const [userId, setUserId] = useState('1')
  const [loginShow, setLoginShow] = useState(true);
  const [signUpShow, setSignUpShow] = useState(false)
  const [username, setUsername] = useState('guest')
  const [password, setPassword] = useState('')
  const [loggedinUser, setLoggedinUser] = useState({})

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
                handleLoginClose()
            } else {
                alert('Wrong Username or Password')
            }
        })
    }

  const handleLoginSubmit = e => {
    e.preventDefault()
    loginUser()
  }



  // const logginUser = id => {
  //   setUserId(id)
  // }

  const handleCreateAccountClick = () => {
    handleLoginClose()
    setSignUpShow(true)
  }

  // useEffect(() => {
  //   if (users.length > 0) {
  //     let user = users.find(user => user.id === userId)
  //     let username = user.username
  //     setUsername(username)      
  //   }
  // }, [userId])

  // useEffect(() => {
  //   fetch('https://react-tetris-backend.herokuapp.com/api/v1/users')
  //   .then(response => response.json())
  //   .then(users => setUsers(users))
  // }, [loginShow])

  return (
    <div className="App">
      
      <LogIn username={username} password={password} handlePasswordChange={handlePasswordChange} handleUsernameChange={handleUsernameChange} handleCreateAccountClick={handleCreateAccountClick} handleLoginSubmit={handleLoginSubmit} handleLoginClose={handleLoginClose} loginShow={loginShow}/>
      <SignUp handleLoginShow={handleLoginShow} signUpShow={signUpShow} handleSignUpClose={handleSignUpClose} />
      {/* <MainBody loggedinUser={loggedinUser} userId={userId}/> */}
      <Tetris loggedinUser={loggedinUser} />
      {/* <LeaderBoard scores={scores}/> */}
    </div>
  )
}

export default App
