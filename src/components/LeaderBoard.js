import React from 'react'
import {Table} from 'react-bootstrap'
import Score from './Score'

export default function leaderBoard(props) {
    

    const renderAllScores = () => {

        if (props.scores.length > 0) {
            let count = 0
            return props.scores.map(score => {
                count ++
                return <Score place={count} username={score.user.username} key={score.id} id={score.id} score={score.points} level={score.level} rows={score.rows} />
            })            
        }
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
                {renderAllScores()}
            </tbody>
        </Table>
    )
}
