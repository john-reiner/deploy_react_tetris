import React, { useState, useEffect } from 'react'

import './App.css';
import Tetris from './components/Tetris';
import DisplayUser from './components/DisplayUser'

const App = () =>  {

  const [userModalShow, setUserModalShow] = useState(false)

  const handleUserModalShow = () => setUserModalShow(true)
  const handleUserModalClose = () => setUserModalShow(false)





  return (
    <div className="App">

      <DisplayUser 
        userModalShow={userModalShow}
        handleUserModalClose={handleUserModalClose}
      />

      <Tetris />

    </div>
  )
}

export default App
