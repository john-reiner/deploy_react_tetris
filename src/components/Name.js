import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export default function Name(props) {

    return (
        <>
            <Modal show={props.nameShow} onHide={props.handleNameModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Please enter a name to use for your score:</Form.Label>
                        <Form.Control type="text" value={props.name} onChange={props.handleNameChange} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleNameModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
