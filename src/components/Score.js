import React from 'react'

export default function Score(props) {

    return (
        <tr>
            <td>{props.place}</td>
            <td>{props.name === '' ? 'Guest' : props.name}</td>
            <td>{props.score}</td>
            <td>{props.rows}</td>
            <td>{props.level}</td>
        </tr>
    )
}
