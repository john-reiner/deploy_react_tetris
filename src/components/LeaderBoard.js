import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap'
import Score from './Score'

export default function LeaderBoard() {

    const [scores, setScores] = useState([])

    useEffect(() => {
        fetch('https://react-tetris-backend.herokuapp.com/api/v2/scores',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(scores => {
            setScores(scores.all_scores)
        })
    }, [])
    

    const renderAllScores = () => {
        if (scores.length > 0) {
            let count = 0
            return scores.map(score => {
                count ++
                return <Score place={count} name={score.name} key={score.id} id={score.id} score={score.points} level={score.level} rows={score.rows} />
            })            
        }
    }



    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
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
