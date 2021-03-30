import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export default function GameOver(props) {

    const fetchScore = () => {
        
        fetch("https://react-tetris-backend.herokuapp.com/api/v2/scores", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: props.name,
                points: props.score,
                rows: props.rows,
                level: props.level
            })
        })
        props.handleGameOverModalClose()
    }

    return (
        <Modal show={props.gameOverShow} onHide={props.handleGameOverModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Game Over</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Score: {props.score}</p>
                <p>Rows: {props.rows}</p>
                <p>Level: {props.level}</p>
                <Form.Group>
                    <Form.Label>Please enter a name to use for your score:</Form.Label>
                    <Form.Control type="text" value={props.name} onChange={props.handleGameOverNameChange} />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={fetchScore}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
