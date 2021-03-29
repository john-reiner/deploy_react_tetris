import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {

    return (

        <div>
            <ul>
                <Link to="/leaderBoard"><li>Leader Board</li></Link>
                <Link to='/deploy_react_tetris/'><li>Tetris</li></Link>
                <li id='user' onClick={props.handleNameModalShow}>Name: {props.name}</li>
            </ul>
        </div>

    )
}
