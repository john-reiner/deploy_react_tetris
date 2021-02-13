import React from 'react'
import {Button, Modal, Form, Spinner} from 'react-bootstrap'

export default function LogIn(props) {
    
    return (
        <div>
            <Modal show={props.loginShow} onHide={props.handleLoginClose} >
                <Modal.Header closeButton>
                <Modal.Title>Welcome to Tetris in React!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={props.handleLoginSubmit} id="form">
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" onChange={props.handleUsernameChange} value={props.username} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={props.handlePasswordChange} value={props.password} />
                    </Form.Group>
                    </Form>
                    {props.errors}
                </Modal.Body>
                <Modal.Footer>
                    <Form.Text className="text-muted">
                                Not registered? <Button variant="link" onClick={props.handleCreateAccountClick}>Create an account</Button>
                    </Form.Text>
                    {props.loggingIn === true ?   <Button style={{fontFamily : "Pixel, Arial, Helvetica, sans-serif"}} variant="dark" disabled><Spinner variant="light" as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>Loading...</Button> : <Button variant="primary" type='submit' form='form' >Login</Button>}
                    
                </Modal.Footer>
            </Modal>
        </div>
    )
}