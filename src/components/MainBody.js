import React from 'react'
import Tetris from './Tetris'


export default function MainBody(props) {
    return (
        <Tetris userId={props.userId} scores={props.scores} username={props.username} />
    )
}
