import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseService";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
    setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    };

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/home");
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    };

    return (
        <div className='loginForm'>
            <Container >
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <h3>Matuarity Tracking Service</h3>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={4}>
                        <Form onSubmit={onLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={handleEmailChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={handlePasswordChange}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                            Log In
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};