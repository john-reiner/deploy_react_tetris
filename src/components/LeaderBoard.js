import React from 'react'
import {Table} from 'react-bootstrap'
import Score from './Score'

export default function leaderBoard(props) {
    
    console.log(props.scores)

    const renderScores = () => {
        let count = 0
        return props.scores.map(score => {
            return <Score place={count += 1} key={score.id} id={score.id} username={score.user.username} score={score.points} level={score.level} rows={score.rows} />
        })
    }

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Score</th>
                    <th>Rows</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody>
                {renderScores()}
            </tbody>
        </Table>
    )
}
