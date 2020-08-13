import React from 'react'
import {Button, Modal, Form} from 'react-bootstrap'

export default function LogIn(props) {

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [user, setUser] = useState({})

    // const handleUsernameChange = e => setUsername(e.target.value)
    // const handlePasswordChange = e => setPassword(e.target.value)

    // const onSubmit = e => {
    //     e.preventDefault()
    //     loginUser()
    // }

    // const loginUser = () => {
    //     fetch('https://react-tetris-backend.herokuapp.com/api/v1/users')
    //     .then(response => response.json())
    //     .then(users => {
    //         let user = users.find(user => user.username === username)
    //         if (user && user.password ===  password) {
    //             setUser(user)
    //             props.handleLoginClose()
    //         } else {
    //             alert('Wrong Username or Password')
    //         }
    //     })
    // }

    // useEffect(() => {
    //     props.logginUser(user.id)
    // }, [user])
    
    
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
                    <Form.Text className="text-muted">
                            Not registered? <Button variant="link" onClick={props.handleCreateAccountClick}>Create an account</Button>
                    </Form.Text>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type='submit' form='form' >
                        Login
                    </Button>
                    <Button variant="secondary" onClick={props.handleLoginClose}>
                        Login as guest
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}