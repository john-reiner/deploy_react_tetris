import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function Name(props) {
    return (
        <>
            <Modal show={props.nameShow} onHide={props.handleNameModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleNameModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
