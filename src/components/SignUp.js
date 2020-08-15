import React, { useState } from 'react'
import {Button, Modal, Form} from 'react-bootstrap'


export default function LogIn(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const handleUsernameChange = e => setUsername(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)
    const handleConfirmedPasswordChange = e => setConfirmedPassword(e.target.value)


    const onSubmit = e => {
        e.preventDefault()
        if (username !== '' && password !== '' && password === confirmedPassword) {
            fetch("https://react-tetris-backend.herokuapp.com/api/v1/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })
            props.handleSignUpClose()
            props.handleLoginShow()
        } else {
            alert('Feilds are empty or Passwords do not match')
        }
        
    }

    return (
        <div>
            <Modal show={props.signUpShow} onHide={props.handleSignUpClose} >
                <Modal.Header closeButton>
                <Modal.Title>Create an Account!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit} id="form">
                    <Form.Group>
                        <Form.Label>Create a Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" onChange={handleUsernameChange} value={username} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Create a Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={password} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handleConfirmedPasswordChange} value={confirmedPassword} />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type='submit' form='form' >
                        Sign Up!
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
