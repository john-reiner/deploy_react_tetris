import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function DisplayUser(props) {



    return (
        <Modal
            size="lg"
            show={props.userModalShow}
            onHide={props.handleUserModalClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Would you like to Logout?
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Button variant="danger" onClick={props.logout}>Logout</Button>{' '}
            <Button variant="success">Keep Playing</Button>
            </Modal.Body>
        </Modal>
    )
}
